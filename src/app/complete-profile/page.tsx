"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserIcon, ChevronsUpDown, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { branches } from "@/data/branch";
import { AnimatePresence, motion } from "framer-motion";
import { LoaderThree } from "@/components/loader";
import { LoaderOne } from "@/components/ui/loader";

export default function CompleteProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (
      metadata?.college &&
      metadata?.branch &&
      metadata?.year &&
      metadata?.mobile
    ) {
      router.push("/dashboard");
    }
  }, [isLoaded, user, router]);

  // Fetch colleges
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

  if (!isLoaded)
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-amber-50 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LoaderThree />
        </motion.div>
      </AnimatePresence>
    );

  if (!user) return null;

  return (
    <main className="flex items-center justify-center min-h-screen bg-amber-50/50 px-4 text-gray-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-600">
            Campus Ambassador Profile
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Complete your profile to get started
          </p>
        </div>

        {/* Profile Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-yellow-100 p-5 rounded-full shadow-inner">
            <UserIcon className="w-12 h-12 text-yellow-500" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => {
                const onlyLetters = e.target.value.replace(/[^A-Za-z\s]/g, "");
                setName(onlyLetters);
              }}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-500 h-12"
            />
          </div>

          {/* College */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              College/University
            </label>
            <div className="relative w-full">
              <Popover open={collegeOpen} onOpenChange={setCollegeOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    role="combobox"
                    aria-expanded={collegeOpen}
                    className="w-full justify-between border border-gray-300 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center h-12"
                  >
                    <span className="truncate overflow-hidden whitespace-nowrap text-ellipsis">
                      {college || "Select College/University"}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50 shrink-0" />
                  </button>
                </PopoverTrigger>

                <PopoverContent
                  side="bottom"
                  align="start"
                  className="w-full max-h-60 overflow-auto p-0 z-50"
                >
                  <Command>
                    <CommandInput
                      placeholder="Search or type college..."
                      value={collegeQuery}
                      onValueChange={(value) => {
                        setCollegeQuery(value);
                        setCollege(value);
                      }}
                    />
                    <CommandEmpty>
                      No college found. You can type your college name.
                    </CommandEmpty>
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
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              college === c ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {c}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Branch + Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Branch */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Branch/Stream
              </label>
              <Popover open={branchOpen} onOpenChange={setBranchOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    role="combobox"
                    aria-expanded={branchOpen}
                    className="w-full justify-between border border-gray-300 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center h-12"
                  >
                    <span className="truncate">
                      {branch || "Select Branch/Stream"}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50 shrink-0" />
                  </button>
                </PopoverTrigger>

                <PopoverContent
                  side="bottom"
                  align="start"
                  className="w-full max-h-60 overflow-auto p-0 z-50"
                >
                  <Command>
                    <CommandInput
                      placeholder="Search or type branch..."
                      onValueChange={(value) => {
                        setBranch(value);
                      }}
                    />
                    <CommandEmpty>
                      No branch found. You can type your branch/stream.
                    </CommandEmpty>
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
                            className={cn(
                              "mr-2 h-4 w-4",
                              branch === b ? "opacity-100" : "opacity-0"
                            )}
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
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-600">
                Year of Study
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                className="w-full border border-gray-300 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 h-12"
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your 10-digit phone number"
              minLength={10}
              maxLength={10}
              value={mobile}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                setMobile(onlyNumbers);
              }}
              required
              className="w-full border border-gray-300 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 h-12"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={cn(
              "bg-yellow-500 text-white w-full py-3 rounded-lg font-semibold shadow-md",
              "hover:bg-yellow-600 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            )}
            disabled={loading}
          >
            {loading ? <LoaderOne /> : "Save Profile"}
          </button>
        </form>
      </div>
    </main>
  );
}
