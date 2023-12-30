import axios from "axios";

const baseURL = "https://ai-tool-express-api.vercel.app/api/ai_tool";
export const getAllTools = async () => {
    try{
        const response = await axios.get(baseURL);
        return response.data;
    }   
    catch(error){
        console.log(error);
    }
}