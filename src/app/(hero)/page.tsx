import React from "react";
import Hero from "@/app/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <div>
      <Hero imgUrl="/images/01.png" imgAlt="Home" content="Welcome to our website!"/>
    </div>
  );
}
