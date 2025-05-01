import React from "react";

const sampleImages = [
  "https://images.unsplash.com/photo-1606813904191-01c3c763fd3a",
  "https://images.unsplash.com/photo-1615310613851-cbcb3d6277d5",
  "https://images.unsplash.com/photo-1598899134739-40b46d9f79c8",
  "https://images.unsplash.com/photo-1581905764498-d8c5c2040a29",
  "https://images.unsplash.com/photo-1577203219214-b59c1a1fc19e"
];

function Banner() {
  return (
    <div className="bg-black text-white px-10 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
      
    </div>
  );
}

export default Banner;
