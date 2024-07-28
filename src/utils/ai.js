const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDRRSIPvWPj4FZklWmsGc-OExXkAV6GoP4");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default  model;