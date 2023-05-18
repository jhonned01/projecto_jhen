"use client";
import React, { useEffect, useState } from "react";
import ProducFeed from "./ProducFeed";
import Banner from "./Banner";
import Header from "./Header";

export default function HomePage() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Buzo Manga Larga ",
      price: 55.9,
      description: "Buzo streewear de algodon,con un diseño diferente ",
      category: "men's clothing",
      image: "/img1.jpeg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Pantalon de Bota Tubo,Marfil ",
      price: 75.9,
      description: "Pantalon de color solido,con mucho estilo",
      image: "/img2.jpeg",

      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Camiseta Manga Corta-Negra",
      price: 29.9,
      description: "Camisa Basica negra overzise",
      category: "men's clothing",
      image: "/img3.jpeg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Camiseta Manga Corta Negro",
      price: 33.9,
      description: "Diseño En Estampado Con Estilo Animado  ",
      category: "men's clothing",
      image: "/img4.jpeg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title: "Bermuda Tiro Medio Multicolor",
      price: 35.0,
      description: "Bermuda Comoda Multicolor",
      category: "men's clothing",
      image: "/img5.jpeg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Camiseta Manga Corta Blanco ",
      price: 35.9,
      description: "Casimeta Con Diseño Colorido y Estampado de Letras",
      category: "",
      image: "/img6.jpeg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "Camiseta Manga Corta",
      price: 27.9,
      description: "camiseta manga corta unisex multicolor",
      category: "",
      image: "/img7.jpeg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Buzo",
      price: 50.9,
      description: "Buzo Manga larga con Patron de Manchas de Puma ",
      category: "",
      image: "/img8.jpeg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "buzo Manga Lagar Negro",
      price: 45.0,
      description: "buzo manfa larga negro con estampado sencillo ",
      category: "",
      image: "/img9.jpeg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "Vestido de Baño Entero",
      price: 37.5,
      description: "Vestido de Baño Entero Con Tonos Pasteles y Palmeras",
      category: "",
      image: "/img10.jpeg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title: "Camiseta Manga Corta Negra",
      price: 70.0,
      description: "Camiseta Basica negro Manga Corta ",
      category: "",
      image: "/img11.jpeg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title: "Camiseta Manga Corta Marfil",
      price: 23.0,
      description: "Camiseta Manga Corta Marfil  Basica Con Estampado Pequeño",
      category: "",
      image: "/img12.jpeg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: "Buzo manga larga multicolor",
      price: 45,
      description: "Buzo Manga Larga Multicolor Con Tela Suave",
      category: "",
      image: "/img13.jpeg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title: "Buzo manga larga multicolor ",
      price: 47.9,
      description: "Buzo Manga Larga Multicolor Con Tela Suave,Con Patron",
      category: "",
      image: "/img14.jpeg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "Buzo Manga Larga Multicolor ",
      price: 35.9,
      description:
        "Buzo Manga Larga Multicolor Con Tela Suave,Con cuadros de color",
      category: "",
      image: "/img15.jpeg",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
  ]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Banner />

      {<ProducFeed products={data} />}
    </div>
  );
}
