"use client";

import { useState } from "react";

export default function ApiTest() {
  const [result, setResult] = useState<string>("");

  const testSave = async () => {
    try {
      const res = await fetch("/api/save-to-sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          mobile: "1234567890",
          college: "Test College",
          branch: "CSE",
          year: "3",
        }),
      });

      const data = await res.json();
      setResult(JSON.stringify(data));
    } catch (err) {
      setResult("Error: " + err);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={testSave}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Test Save to Sheet
      </button>
      <p className="mt-4">Result: {result}</p>
    </div>
  );
}
