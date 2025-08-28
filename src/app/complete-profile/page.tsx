"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { POST } from "../api/save-to-sheets/route";

export default function CompleteProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect returning users who already filled profile
  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      router.push("/"); // Not signed in, redirect to landing
      return;
    }

    const metadata = user.publicMetadata;
    if (metadata?.college && metadata?.branch && metadata?.year && metadata?.mobile) {
      router.push("/dashboard"); // Already completed profile
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) return <p>Loading...</p>;
  if (!user) return null; // Prevent rendering if user is null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const email = user.primaryEmailAddress?.emailAddress || ""; // Get the user's email

    try {
      // Update Clerk metadata
      await user.update({
        unsafeMetadata: { name, mobile, college, branch, year },
      });

      // Save to Google Sheets
      await fetch("/api/save-to-sheets", {
        body: JSON.stringify({ name, email, mobile, college, branch, year }), // Include the email variable
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      router.push("/dashboard");
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("Failed to save profile. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-508">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 p-6 rounded-xl shadow-lg max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl text-gray-700 font-bold text-center">Complete Your Profile</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          minLength={10}
          maxLength={10}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Year of Study</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="5">5th Year</option>
        </select>

        <button
          type="submit"
          className={`bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save & Continue"}
        </button>
      </form>
    </main>
  );
}
