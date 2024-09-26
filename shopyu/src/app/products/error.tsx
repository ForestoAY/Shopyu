"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error }: ErrorProps) {
  return (
    <div>
      <h1>Error occured: {error.message}</h1>
    </div>
  );
}
