import React from "react";
import ImageWithBlur from "./ImageWithBlur";

function GridCol2Card({ className }) {
  return (
    <div className="grid grid-cols-2 gap-20 items-center my-32">
      <ImageWithBlur className="h-[400px] w-[80%] mx-auto" />
      <div className={`-order-1 ${className}`}>
        <h3 className="subtitle text-4xl mt-3">Computer Science</h3>
        <p className="text mt-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          odit eos provident quasi architecto magnam tempora illo praesentium.
          Aliquid magni hic labore quam quia ipsam aperiam culpa corporis, ullam
          accusantium?
        </p>
        <button className="btn mt-10 py-3 px-9">Learn More</button>
      </div>
    </div>
  );
}

export default GridCol2Card;
