import model from "./ai";

async function getMovieRecommendation(prompt) {
  try {
    console.log("ai being called")
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text =  response.text(); // Await the text promise
    const moviesName = JSON.parse(text); // Parse the JSON string
    console.log("movies being parsed")
    console.log(moviesName)
    if (!moviesName || !Array.isArray(moviesName)) {
      return [];
    }
    
    return moviesName;
  } catch (error) {
    // console.error("Error in getMovieRecommendation:", error);
    return [];
  }
}

export default getMovieRecommendation;