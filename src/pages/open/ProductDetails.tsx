import aiTools from "../../assets/data/aiTools.json";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
export interface Tool {
  _id: string;
  title: string;
  toolDescription: string;
  shortDescription: string;
  useCase1: string;
  useCase2: string;
  useCase3: string;
  price: number;
  pricePlan: string;
  pricing: string;
  toolURL: string;
  toolFeature: string;
  toolTags: string[];
  toolScreenshot: string;
  userId: string;
  category: string;
  subcategories: string;
}

const ProductDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const result = aiTools.find((tool) => tool._id === id);
    const data = result as Tool;

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg relative">
      {/* for image */}
      <div className="relative overflow-hidden rounded-lg mb-8 group">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-black py-2 px-6 rounded-full absolute top-4 left-4 group-hover:opacity-100 opacity-0  transition-all duration-300 z-50"
        >
          <ArrowUturnLeftIcon className="h-5 w-5" />
        </button>
        {/* Product Image */}
        <img
          className="w-full h-[70vh] rounded-lg shadow-md transform scale-100 group-hover:scale-105 transition-transform duration-300"
          src={`https://picsum.photos/500/350?${Math.random()}`}
          alt={data.title}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white blur opacity-0 group-hover:opacity-50 group-hover:blur-10 transition-all duration-300"></div>
      </div>

      <div>
        {/* Title and Price */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">{data.title}</h2>
          <p className="text-green-600 text-lg">
            ${data.price.toFixed(2)} per week
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">{data.toolDescription}</p>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
          <p className="text-gray-600 mb-2">{data.toolFeature}</p>
        </div>

        {/* Use Cases */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Use Cases:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>{data.useCase1}</li>
            <li>{data.useCase2}</li>
            <li>{data.useCase3}</li>
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Tool Tags:</h3>
          <div className="flex flex-wrap">
            {data.toolTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-gray-100 text-gray-800 px-2 py-1 m-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href={data.toolURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
          >
            View Tool
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
