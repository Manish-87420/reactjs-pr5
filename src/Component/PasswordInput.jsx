import { useState } from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="w-full px-4 py-3 pr-20 rounded-xl border border-slate-200
                   outline-none focus:ring-2 focus:ring-blue-300
                   text-slate-700"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2
                   text-sm font-semibold text-blue-600
                   hover:text-blue-800"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordInput;