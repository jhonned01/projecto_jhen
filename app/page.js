"use client";

import { useEffect, useState } from "react";
import ProducFeed from "./ProducFeed";
import Banner from "./Banner";
import Header from "./Header";

export default function HomePage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />

      {data && <ProducFeed products={data} />}
    </main>
  );
}
