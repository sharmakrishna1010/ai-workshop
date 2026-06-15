import React from "react";
import { FaLock } from "react-icons/fa";

const Form: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setphone] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const validateInput = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      return "All fields are required.";
    }
    if (name.trim().length < 3) {
      return "Name must be at least 3 characters long.";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must be exactly 10 digits.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);

    const error = validateInput();
    if (error) {
      setErrorMsg(error);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setphone("");
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Unable to connect to the registration server.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    name.trim().length >= 3 &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
    /^\d{10}$/.test(phone);

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 w-full flex flex-col gap-6">
      <div className="flex flex-col gap-1 pb-4 border-b border-gray-100">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-gray-900">₹2,999</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            ALL INCLUSIVE FEE
          </span>
        </div>
        <p className="text-gray-500 text-xs">
          Secure your child's spot. Only a few seats remaining.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 text-xs font-semibold text-red-600 bg-red-50 rounded-xl border border-red-100">
          {errorMsg}
        </div>
      )}
      {success && (
        <div className="p-3 text-xs font-semibold text-green-600 bg-green-50 rounded-xl border border-green-100">
          Seat Reserved Successfully! Check your email for details.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 pl-1">
            Parent / Child Name
          </label>
          <input
            type="text"
            placeholder="e.g. Krishna Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-gray-50/70 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 outline-none text-sm font-medium focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-200 disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 pl-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-gray-50/70 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 outline-none text-sm font-medium focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-200 disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 pl-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="10-digit phone number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-gray-50/70 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 outline-none text-sm font-medium focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-200 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`w-full py-4 rounded-2xl text-white font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
            isFormValid && !loading
              ? "bg-orange-500 cursor-pointer hover:bg-orange-600 shadow-md shadow-orange-500/10 active:scale-[0.99]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              <span>Processing...</span>
            </>
          ) : (
            "Enroll Now"
          )}
        </button>
      </form>

      <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs font-medium pt-2">
        <FaLock className="text-[10px]" />
        <span>100% Safe & Secure Registration</span>
      </div>
    </div>
  );
};

export default Form;
