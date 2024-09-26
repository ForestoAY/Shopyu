import { UserTypes } from "@/types/UserTypes";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Login with your Shopyu Account",
};

export default function LoginPage() {
  const login = async (formData: FormData) => {
    "use server"
    
    const body = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!res.ok) {
      const data = await res.json() as { error: string }
      return redirect(`/login?error=${data.error}`)
    }

    const data = await res.json() as { access_token: string, user: UserTypes }
    cookies().set("Authorization", `Bearer ${data.access_token}`)
    cookies().set("User", `Bearer ${data.user}`)

    redirect("/")
  }
  return (
    <div className="min-h-screen bg-orange-500 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login to Shopyu
        </h2>

        <form action={login}>
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
              Login
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm">Don&apos;t have an account? </span>
            <Link
              href="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
