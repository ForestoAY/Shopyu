import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
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
      <div className="flex-none gap-2">
        <Search />
      </div>
    </div>
  );
}
