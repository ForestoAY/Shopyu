"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function SweetAlert() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const error = searchParams.get("error");
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (error) {
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
        timer: 3000,
        showConfirmButton: false
      });

      timer = setTimeout(() => {
        router.replace(pathname);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [error, pathname, router]);

  return null;
}
