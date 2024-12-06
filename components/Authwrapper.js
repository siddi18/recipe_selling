// components/AuthWrapper.js
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";        // don't use next/router
import { useEffect } from "react";

export default function AuthWrapper({ children }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return children;
  }

  return null;
}