"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserIcon, ChevronsUpDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { branches } from "@/data/branch"; // Your static branch list

export default function CompleteProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  // Dropdown states
  const [branchOpen, setBranchOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [collegeQuery, setCollegeQuery] = useState("");
  const [collegeOptions, setCollegeOptions] = useState<string[]>([]);

  // Redirect if profile already completed
  useEffect(() => {
    if (!isLoaded) return;
    if (!user) {
      router.push("/");
      return;
    }
    const metadata = user.unsafeMetadata;
    if (metadata?.college && metadata?.branch && metadata?.year && metadata?.mobile) {
      router.push("/dashboard");
    }
  }, [isLoaded, user, router]);

  // Fetch colleges via API
  useEffect(() => {
    if (!collegeQuery) {
      setCollegeOptions([]);
      return;
    }

    const fetchColleges = async () => {
      try {
        const res = await fetch(`/api/colleges?q=${collegeQuery}`);
        const data = await res.json();
        setCollegeOptions(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchColleges();
  }, [collegeQuery]);

  // Remove duplicates before rendering
  const uniqueCollegeOptions = Array.from(new Set(collegeOptions));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const email = user?.primaryEmailAddress?.emailAddress || "";

    try {
      await user?.update({
        unsafeMetadata: { name, mobile, college, branch, year },
      });

      await fetch("/api/save-to-sheets", {
        body: JSON.stringify({ name, email, mobile, college, branch, year }),
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

  if (!isLoaded) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <main className="flex items-center justify-center min-h-screen text-gray-700 bg-amber-50/50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-yellow-600">Campus Ambassador Profile</h1>
          <p className="text-gray-600 text-sm">
            Complete your profile to get started as a campus ambassador
          </p>
        </div>

        {/* Profile Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-4 rounded-full">
            <UserIcon className="w-10 h-10 text-yellow-500" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* College Dropdown */}
          <div className="relative w-full">
            <Popover open={collegeOpen} onOpenChange={setCollegeOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  role="combobox"
                  aria-expanded={collegeOpen}
                  className="w-full justify-between border border-gray-300 p-3 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 flex"
                >
                  {college || "Select College/University"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                </button>
              </PopoverTrigger>

              <PopoverContent side="bottom" align="start" className="w-full max-h-60 overflow-auto p-0 z-50">
                <Command>
                  <CommandInput
                    placeholder="Search college..."
                    value={collegeQuery}
                    onValueChange={setCollegeQuery}
                  />
                  <CommandEmpty>No college found.</CommandEmpty>
                  <CommandGroup>
                    {uniqueCollegeOptions.map((c) => (
                      <CommandItem
                        key={c}
                        value={c}
                        onSelect={() => {
                          setCollege(c);
                          setCollegeOpen(false);
                          setCollegeQuery("");
                        }}
                      >
                        <Check className={cn("mr-2 h-4 w-4", college === c ? "opacity-100" : "opacity-0")} />
                        {c}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Branch + Year */}
          <div className="grid grid-cols-2 gap-4">
            {/* Branch */}
            <div className="relative w-full">
              <Popover open={branchOpen} onOpenChange={setBranchOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    role="combobox"
                    aria-expanded={branchOpen}
                    className="w-full justify-between border border-gray-300 p-3 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 flex"
                  >
                    {branch || "Select Branch/Stream"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                  </button>
                </PopoverTrigger>

                <PopoverContent side="bottom" align="start" className="w-full max-h-60 overflow-auto p-0 z-50">
                  <Command>
                    <CommandInput placeholder="Search branch..." />
                    <CommandEmpty>No branch found.</CommandEmpty>
                    <CommandGroup>
                      {branches.map((b) => (
                        <CommandItem
                          key={b}
                          value={b}
                          onSelect={() => {
                            setBranch(b);
                            setBranchOpen(false);
                          }}
                        >
                          <Check
                            className={cn("mr-2 h-4 w-4", branch === b ? "opacity-100" : "opacity-0")}
                          />
                          {b}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Year */}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="5">5th Year</option>
            </select>
          </div>

          {/* Mobile */}
          <input
            type="tel"
            placeholder="Phone Number"
            minLength={10}
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Submit */}
          <button
            type="submit"
            className={`bg-yellow-500 text-white w-full py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </form>
      </div>
    </main>
  );
}
