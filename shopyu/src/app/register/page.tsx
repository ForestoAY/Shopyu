import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-orange-500 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register to Shopyu
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div className="mb-4">
            <button className="btn w-full bg-orange-500 hover:bg-orange-600 text-white">
              Login
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm">Have an account? </span>
            <Link
              href="/login"
              className="text-sm text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
