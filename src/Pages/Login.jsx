export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[350px] bg-white border p-8">
        <h1 className="text-4xl font-semibold text-center mb-6">
          Instagram
        </h1>

        <input
          className="w-full border p-2 mb-3 text-sm"
          placeholder="Phone number, username, or email"
        />
        <input
          type="password"
          className="w-full border p-2 mb-4 text-sm"
          placeholder="Password"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded text-sm font-semibold">
          Log In
        </button>

        <p className="text-xs text-center text-gray-500 mt-6">
          Forgot password?
        </p>
      </div>
    </div>
  );
}
