import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartControl from "./CartControl";

function ProductItem({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    shippingInformation,
    availabilityStatus,
    reviews,
    images,
    thumbnail,
  } = product;

  // Calculation for Discounted  price
  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <>
      <img
        src={images[0] || thumbnail}
        alt={title}
        loading="lazy"
        className="w-full p-2 max-w-[300px] text-xs rounded-lg mx-auto h-70 hover:scale-[1.1]  hover:sticky transition object-contain"
      />
      <div className="p-4 bg-white flex flex-col justify-between">
        <h2 className="text-md  mb-2 md:truncate">{title}</h2>
        <div className="w-full">
          <div className="flex items-center mb-2">
            <span className="text-xl font-self text-blue-600 mr-2">
              ${discountedPrice}
            </span>
            <span className="text-sm line-through text-gray-400">
              ${price.toFixed(2)}
            </span>
            <span className="ml-auto text-sm text-blue-500">
              {Math.round(discountPercentage)}% OFF
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-md ">
              {"★".repeat(Math.round(Number(rating)))}{" "}
              <span className="text-black">{rating.toFixed(1)}/5</span>
            </span>
            <span className="ml-2 text-sm text-gray-600">
              ({reviews.length} reviews)
            </span>
          </div>
          <div className="w-full flex justify-between items-center mb-4">
            <span
              className={`${
                product.availabilityStatus === "In Stock"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              } text-xs px-2 py-1 rounded-xl`}>
              {" "}
              {availabilityStatus}
            </span>

            <span className="text-xs  text-gray-500">
              {shippingInformation}
            </span>
          </div>
          {/*View & Add product to cart*/}
          <div
            className={`${
              !isAdded ? "grid grid-cols-2" : "flex "
            } gap-4 items-center text-sm`}>
            <Link
              key={"/"}
              to={`/products/${id}`}
              className={`${
                isAdded && "w-full"
              } text-center bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg shadow-lg transition`}>
              View Details
            </Link>

            {!isAdded ? (
              <button
                onClick={() => {
                  addToCart(product);
                  setIsAdded(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 flex-grow rounded-lg border border-blue-600 shadow-lg transition">
                Add To Cart
              </button>
            ) : (
              <CartControl product={product} handleItem={setIsAdded} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ProductItem);
