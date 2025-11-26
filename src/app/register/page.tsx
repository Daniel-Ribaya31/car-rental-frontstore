"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [password, setPassword] = useState("");

  const getStrength = (pw: string) => {
    let score = 0;
    if (pw.length >= 6) score++;     // minimum
    if (pw.length >= 10) score++;    // good
    if (pw.length >= 14) score++; 
    if (pw.match(/[A-Z]/)) score++;
    if (pw.match(/[0-9]/)) score++;
    if (pw.match(/[^A-Za-z0-9]/)) score++;

    if (score <= 1) return "weak";
    if (score <= 3) return "medium";
    return "strong";
  };

  const strength = getStrength(password);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/toyota-background.jpg')" }}
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-gray-200">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Create Account
        </h2>
        <p className="text-gray-600 text-center mt-2 text-sm">
          Join Toyota Rentacar today.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#F28C28] focus:border-[#F28C28]"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#F28C28] focus:border-[#F28C28]"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#F28C28] focus:border-[#F28C28]"
              placeholder="0912 345 6789"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#F28C28] focus:border-[#F28C28]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Strength Meter */}
            {password.length > 0 && (
              <div className="mt-1">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      strength === "weak"
                        ? "w-1/4 bg-orange-500"
                        : strength === "medium"
                        ? "w-2/3 bg-yellow-500"
                        : "w-full bg-green-600"
                    }`}
                  ></div>
                </div>

                <span
                  className={`text-xs font-medium mt-1 block ${
                    strength === "weak"
                      ? "text-[#F28C28]"
                      : strength === "medium"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {strength === "weak"
                    ? "Weak – try adding numbers or capitals"
                    : strength === "medium"
                    ? "Medium – stronger, but can improve"
                    : "Strong password"}
                </span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#F28C28] focus:border-[#F28C28]"
              placeholder="Confirm password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#F28C28] text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition"
          >
            Create Account
          </button>
        </form>

        {/* Bottom Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#F28C28] font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
