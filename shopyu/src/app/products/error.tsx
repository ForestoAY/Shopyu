"use client";

type ErrorProps = {
  error: Error;
  reset: () => {};
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>Error occured: {error.message}</h1>
    </div>
  );
}
