import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Navbar() {
  const isLogin = cookies().has("Authorization");

  return (
    <div className="navbar bg-base-100 px-4 flex justify-between">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Shopyu</Link>
      </div>
      <div className="flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 justify-end">
          {isLogin ? (
            <form
              action={async () => {
                "use server";
                cookies().delete("Authorization");
                cookies().delete("User");
                redirect("/login");
              }}
            >
              <button className="btn btn-outline">Logout</button>
            </form>
          ) : (
            <Link href="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
    </div>
  );
}
