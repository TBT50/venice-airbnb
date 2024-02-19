"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return <Image src="/images/logo.png" alt="" width="100" height="100" />;
};
