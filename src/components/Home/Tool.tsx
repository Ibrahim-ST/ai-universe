import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Loading from "../shared/Loading";

const Tool = () => {
  const [page, setPage] = useState(1);
  const [tools, setTools] = useState([]);
  const { ref, inView } = useInView();
  const [noMoreData, setNoMoreData] = useState(false);

  const fetchTools = async (page: number) => {
    const apiURL = `https://ai-tool-express-api.vercel.app/api/ai_tool?page=${page}&limit=10`;
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    if (noMoreData) {
      return 0;
    }
    const nextPage = page + 1;
    const newTools = (await fetchTools(nextPage)) ?? [];

    if (newTools.length === 0) {
      setNoMoreData(true);
    } else {
      setTools((preTools) => [...preTools, ...newTools]);
      setPage(nextPage);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  return (
    <div>
      <Card tools={tools} />
      <div ref={ref}>
        {noMoreData ? (
          <span className="text-center">No more data available</span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tool;
 