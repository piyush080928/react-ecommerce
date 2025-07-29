import WallPaper from "../components/Wallpaper";
import Category from "../Product/Category";
import ProductCard from "../Product/ProductCard";
import MemberShips from "../components/MemberShips";
import Video from "../components/Video";
import Testimonials from "../Footer/Testimonials";
import Powered from "../Footer/Powered";
import Foot from "../Footer/Footer";
import products from "../Data/data";

export default function Home({ searchTerm, addToCart, toggleLike, handleProtectedAction }) {
  const filteredProducts =
    searchTerm.trim() === ""
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="w-full min-h-screen bg-red-100 overflow-x-hidden">
      {/* Wallpaper Section */}
      <div className="w-full">
        <WallPaper />
      </div>

      {/* Category */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Category />
      </div>

      {/* Product Cards */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <ProductCard
          addTocart={addToCart}
          toggleLike={toggleLike}
          handleProtectedAction={handleProtectedAction}
          products={filteredProducts}
        />
      </div>

      {/* Memberships */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <MemberShips />
      </div>

      {/* Video */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Video />
      </div>

      {/* Testimonials */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Testimonials />
      </div>

      {/* Powered */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Powered />
      </div>

      {/* Footer */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Foot />
      </div>
    </div>
  );
}
