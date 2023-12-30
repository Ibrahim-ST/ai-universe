import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Tool = () => {
  const [page, setPage] = useState(1);
  const [tools, setTools] = useState([]);
  const { ref, inView } = useInView();
  const [noMoreData, setNoMoreData] = useState(false)

  const fetchTools = async (page: number) => {
    const apiURL = `https://ai-tool-express-api.vercel.app/api/ai_tool?${page}`;
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      return data.data
    } catch (error) {
      console.log(error);
    }
  };
  
  const loadMore = async () => {
    if(noMoreData){
      return 0
    }
    const nextPage = page + 1;
    const newTools = await fetchTools(nextPage) ?? [];

    if(newTools.length === 0){
      setNoMoreData(true);
    } else {
      setTools((preTools) => [...preTools, ...newTools]);
      setPage(nextPage);
    }

  }

  return (
    <div>
      <Card />
    </div>
  );
};

export default Tool;
