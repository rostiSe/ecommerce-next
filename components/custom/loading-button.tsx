"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function LoadingButton({
  loading = false,
  className,
  text = "Send",
  onClick
}: {
  loading: boolean;
  className?: string;
  text?: string;
  onClick?: () => void;
}) {
  return (
    <div>
      <Button
        className={cn(
          "cursor-pointer m-2 rounded-none flex gap-2 border border-black/80 bg-white text-teal-600 hover:bg-black/85 hover:text-teal-400",
          className
        )}
        disabled={loading}
        onClick={onClick}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.364A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.574zM12 20a8.003 8.003 0 006.364-2.93l-3.93-1.574A4.002 4.002 0 0112 16v4zm6.364-2.93A8.003 8.003 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3.636-1.568zM20 12a8.003 8.003 0 01-2.93-6.364l3.93-1.574A12.001 12.001 0 0024 12h-4z"
            ></path>
          </svg>
        ) : (
          null
        )}
        {text}
      </Button>
    </div>
  );
}
