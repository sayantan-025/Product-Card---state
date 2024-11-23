import React, { useState } from "react";
import ProductData from "./data/ProductData";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([...ProductData]);
  const [showFavourites, setShowFavourites] = useState(false);

  const toggleFavourite = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isFavourite: !product.isFavourite }
          : product
      )
    );
  };

  const toggleExpand = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isExpanded: !product.isExpanded }
          : product
      )
    );
  };

  const clearFavourites = () => {
    setProducts((prev) =>
      prev.map((product) => ({ ...product, isFavourite: false }))
    );
  };

  const displayedProducts = showFavourites
    ? products.filter((product) => product.isFavourite)
    : products;

  return (
    <div>
      <div class="bg">
        <h1>Gadget Gallery</h1>
      </div>
      <div>
        <div className="actions">
          <button
            onClick={() => setShowFavourites(!showFavourites)}
            className="btn"
          >
            {showFavourites ? "Show All Products" : "Show Favourites"}
          </button>
          <button onClick={clearFavourites} className="btn">
            Clear Favourites
          </button>
        </div>
        <div className="grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onToggleFavourite={() => toggleFavourite(product.id)}
              onToggleExpand={() => toggleExpand(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
