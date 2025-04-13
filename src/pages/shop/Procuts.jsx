import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../utils/Products";
import btnIcon from "../../assets/button-icon.png";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleProducts(4); // Reset visible products when category changes
  };

  return (
    <div className="section-container">
      <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

      {/* Category Section */}
      <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
        <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
          {categories.map((category) => (
            <button
              onClick={() => handleCategoryChange(category)} // Use the handler to change category and reset
              type="button"
              key={category}
              className={`py-1.5 sm:px-5 px-8 rounded-full transition-colors ${
                selectedCategory === category ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-8 items-center">
          <button
            onClick={loadMoreProducts}
            className="text-sm text-primary flex items-center gap-1"
          >
            View All
            <img src={btnIcon} alt="btn icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
