"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.back()}>X</div>
      <Link href={`/example/123`}>
        <h1>contact</h1>
      </Link>
    </>
  );
}
