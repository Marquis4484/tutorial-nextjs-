import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      HomePage
      <h1 className="text-7xl"></h1>
      <Link href="/about" className="text-xl text-blue-500">About</Link>
    </div>
  );
}

export default HomePage;
