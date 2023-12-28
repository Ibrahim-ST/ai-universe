import { ArrowTopRightOnSquareIcon, BookmarkIcon, CheckBadgeIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import aiTools from "../../assets/data/aiTools.json";
import { Link } from "react-router-dom";

const Tool = () => {
  return (
    <div className="grid grid-cols-4 gap-4 m-10">
      {aiTools.map((tool, index) => (
        <div key={index} className="rounded-lg border shadow-sm">
          {/* image section  */}
          <div className="w-full h-[250px] rounded-none  ">
            <img
              src={`https://picsum.photos/200/150?${Math.random()}`}
              alt=""
              className="w-full aspect-auto object-cover rounded-t-lg"
            />
          </div>
          {/* description section  */}
          <div className="p-6 pt-4 space-y-2">
            <div className="flex items-center justify-between space-x-2">
              <h4 className="font-bold">{tool.title}</h4>
              <CheckBadgeIcon className="h-5 w-5" />
            </div>

            <button className="flex items-center text-sm space-x-1">
              <EnvelopeIcon className="h-5 w-5" />
              <span>12345</span>
            </button>
          </div>

          <p>{tool.shortDescription}</p>

          <div className="flex items-center justify-center my-1 flex-wrap gap-2">
            {tool.toolTags.map((tag) => (
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border hover:bg-accent py-1 px-2">
                {tag}
              </button>
            ))}
          </div>

          <div className="my-1">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background underline-offset-4 hover:underline text-primary py-0 px-2 h-auto">
              #{tool.category}
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background underline-offset-4 hover:underline text-primary py-0 px-2 h-auto">
              #{tool.subcategories}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 items-center p-6 pt-0">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 text-xl">
              <Link to={`/${tool._id}`}>
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </Link>
            </button>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 text-xl">
              <a href="#">
                <BookmarkIcon className="w-5 h-5" />
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tool;
