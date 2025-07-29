import { useNavigate } from "react-router-dom";
import Combo from '../assets/combo bag isolate & creatine.jpg'
import Creatine from '../assets/creatine.jpg'
import Protein from '../assets/combo whey & bottle.jpg';
import Advanced from '../assets/combo whey advanced & shilajit.jpg'



function Category() {
   const navigate = useNavigate();


  const categories = [
    { name: "Hot deal", image: Advanced },
    { name: "Creatines", image: Creatine },
    { name: "Proteins", image: Protein },
    { name: "Combos", image: Combo },
  ];
  

  return (
    <div>
      <h1 className="text-black bg-red-100 text-center underline text-3xl font-bold">
        SHOP BY CATEGORY
      </h1>

      <div className="flex flex-wrap justify-center gap-6 p-4 bg-red-100">
        {categories.map((cat, index) => (
          <div
            key={index}
           onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)} className="w-[300px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              className="object-cover cursor-pointer transition duration-300 group-hover:scale-105 sm:h-72 w-full h-[200px]"
              src={cat.image}
              alt={cat.name}
            />
            <div className="flex items-center justify-center px-4 py-2 bg-white">
              <button className="px-4 py-2 text-xs font-semibold cursor-pointer text-white uppercase transition-colors duration-300 transform bg-black rounded  hover:bg-red-700 hover:underline focus:outline-none">
                {`Show ${cat.name}`}
              </button>
            </div>
          </div>
        ))}
      </div>

      <h1 className="bg-red-200 text-white h-[2vh] mt-[15px]">.</h1>
    </div>
  );
}

export default Category