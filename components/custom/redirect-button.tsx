'use client'

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function RedirectButton({redirectUrl, text}: {redirectUrl: string, text: string}) {
  // This component is intended to redirect the user to a specific URL.
  const router = useRouter();
  return (
    <Button onClick={() => router.push(redirectUrl)} className="cursor-pointer m-2 rounded-none flex gap-2 border border-black/80 bg-white text-teal-600 hover:bg-black/85 hover:text-teal-400">
        {text}
    </Button>
  )
}
