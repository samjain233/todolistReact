import { useState, useEffect } from "react";
const axios = require("axios");

// const GetQuote = async () => {
//   const response = await axios.get("http://api.quotable.io/random");
//   return response.data.content;
// };

const Navbar = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get("http://api.quotable.io/random").then((response) => {
      setQuote(response.data.content);
    });
  }, []);

  return (
    <>
      <div className="w-screen bg-blue-400 flex items-center shadow-xl">
        <img
          src="https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg "
          className="h-10 px-2"
        ></img>
        <h3 className="text-blue-700 px-2 font-bold">TO DO LIST</h3>
      </div>
      <h1 className="text-center">{quote}</h1>
    </>
  );
};

export default Navbar;
