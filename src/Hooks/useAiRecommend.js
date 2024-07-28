import { useEffect } from "react";
import model from "../utils/ai";
const useAiRecommend = ()=>{

  const prompt = "Write a story about a magic backpack."
  useEffect(()=>{
    getRecommendation();
  })
  const getRecommendation = async()=>{
  const response = await model.generateContent(prompt);
  const text = response.text();
  console.log(text);
  }
}

export default useAiRecommend;