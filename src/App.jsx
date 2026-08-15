import PasswordInput from "./component/PasswordInput";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-blue-600
                           px-4 py-2 rounded-full text-sm font-semibold">
            Practical 5
          </span>

          <h1 className="text-3xl font-bold text-slate-700 mt-5">
            Secure Login 🔐
          </h1>

          <p className="text-slate-500 mt-2">
            Show or hide your password
          </p>
        </div>

        <label className="block text-sm font-semibold text-slate-600 mb-2">
          Password
        </label>

        <PasswordInput />

        <button
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl
                     font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center text-xs text-slate-400 mt-5">
          Your password is kept private and secure.
        </p>

      </div>
    </div>
  );
};

export default App;