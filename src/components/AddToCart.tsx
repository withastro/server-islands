import { useState, useCallback } from "react";

export default function () {
  const [isLoading, setLoading] = useState(false);

  const onClick = useCallback(async () => {
    setLoading(true);
    window.dispatchEvent(new CustomEvent("add-to-cart"));
    await Promise.all([
      fetch("/api/add-to-cart", { method: "POST" }),
      new Promise((resolve) => setTimeout(resolve, 1200)),
    ]);
    setLoading(false);
  }, []);

  return (
    <button
      className="relative flex w-full items-center justify-center rounded-lg bg-gray-600 px-3 py-1 text-sm font-medium text-white hover:bg-sky-600 disabled:text-white/70 disabled:bg-gray-600 mt-4"
      onClick={onClick}
      disabled={isLoading}
    >
      <span className={isLoading ? "sr-only" : ""}>Book now</span>
      {isLoading && (
        <>
          &nbsp;
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="animate-spin h-4 w-4"
          >
            <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"></path>
          </svg>
          &nbsp;
        </>
      )}
    </button>
  );
}
