"use client";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/toyota-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-gray-200">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Login to Your Account
        </h2>
        <p className="text-gray-600 text-center mt-2 text-sm">
          Access your Toyota Rentacar dashboard.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#F28C28] focus:border-[#F28C28]"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#F28C28] focus:border-[#F28C28]"
              placeholder="Enter your password"
            />
          </div>

          <div className="space-y-2">
                <button
                type="submit"
                className="w-full bg-[#F28C28] text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition"
                >
                Login
                </button>

                {/* Google Login */}
                <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg font-medium bg-white hover:bg-gray-50 transition"
                >
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google Logo"
                    className="w-5 h-5"
                />
                Login using Google
                </button>
            </div>
        </form>

        {/* Bottom Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#F28C28] font-medium hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
