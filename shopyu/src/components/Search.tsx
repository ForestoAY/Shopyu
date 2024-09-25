"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface SearchProps {
  searchParams: string;
}

export default function Search({ searchParams }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState(searchParams || "");
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      router.push("/products");
    } else {
      router.push(`/products?search=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm, router]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-end mb-4 pe-10">
      <div className="form-control w-1/3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full pr-10"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
