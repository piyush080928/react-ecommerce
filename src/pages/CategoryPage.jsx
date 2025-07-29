import { useParams, useNavigate } from "react-router-dom";
import products from "../Data/data";
import PageProductCard from "../Product/PageProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-4 bg-red-100 min-h-screen">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-sm sm:text-base"
      >
        ← Back
      </button>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl font-bold underline capitalize mb-4">
        {categoryName} Products
      </h1>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredProducts.map((product) => (
          <PageProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
