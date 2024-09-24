"use client"

export default function Search() {
  return (
    <div className="flex justify-end mb-4 pe-10">
      <div className="form-control w-1/3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full pr-10"
          />
        </div>
      </div>
    </div>
  );
}
