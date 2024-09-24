"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full h-16 flex items-center px-8 ">
      <button onClick={() => router.push("/")}>
        <ArrowLeft className="text-dark-20 size-10" />
      </button>
    </div>
  );
}
