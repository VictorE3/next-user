import Link from "next/link";
import React from "react";
import ProductCard from "./components/ProductCard";

const Home = () => {
  return (
    <main>
      <h1 className="text-black">Home</h1>
      <Link href="/users" className="text-black">
        Users
      </Link>
      <ProductCard />
    </main>
  );
};

export default Home;
