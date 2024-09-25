import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Register Page",
  description: "Register your Shopyu Account",
};

export default function RegisterPage() {
  const register = async (formData: FormData) => {
    "use server"

    const body = Object.fromEntries(formData.entries());

    const res = await fetch("http://localhost:3000/api/register", {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!res.ok) {
      const data = await res.json() as { error: string }
      return redirect(`/register?error=${data.error}`)
    }

    const data = await res.json() as { message: string }
    return redirect("/");
  }
  return (
    <div className="min-h-screen bg-orange-500 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register to Shopyu
        </h2>

        <form action={register}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
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
              name="username"
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
              name="name"
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
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div className="mb-4">
            <button className="btn w-full bg-orange-500 hover:bg-orange-600 text-white">
              Register
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
