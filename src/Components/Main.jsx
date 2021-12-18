import React from "react";
import useFetch from "./CustomHook/useFetch";

function Main() {
  const { quote, isPending, error } = useFetch();

  return (
    <div className='main'>
      <h2>Random Quote</h2>
      <h1>
        {error && "Server Side Error Please Try Again Later"}
        {isPending ? "Fetching Quotes Please Wait" : quote}
      </h1>
      <button onClick={() => window.location.reload()}>New Quotes</button>
    </div>
  );
}

export default Main;
