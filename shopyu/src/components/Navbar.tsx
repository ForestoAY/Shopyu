import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Navbar() {
  const isLogin = cookies().has("Authorization");

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <p className="btn btn-ghost text-xl">Shopyu</p>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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
      <div className="navbar-end">
        {isLogin ? (
          <form action={async() => {
              "use server"
              cookies().delete("Authorization");
              cookies().delete("User");
              redirect("/login");
            }}>
            <button className="btn">Logout</button>
          </form>
        ) : (
          <Link href="/login" className="btn">Login</Link>
        )}
      </div>
    </div>
  );
}
