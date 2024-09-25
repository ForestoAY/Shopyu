import { cookies } from "next/headers"
import Link from "next/link";

export default function ProtectedComponent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isLogin = cookies().has("Authorization");

  if (!isLogin){
    return (
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">401</h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Unauthorized</p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't let you in. Please login first!</p>
              <Link
                href="/login"
                className="inline-flex text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                >
                Login
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {children}
    </>
  )
}