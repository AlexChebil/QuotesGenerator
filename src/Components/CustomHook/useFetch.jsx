import { useEffect, useState } from "react";

function useFetch() {
  const [quote, setQuote] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw Error("couldn't connect with the server");
      })

      .then((data) => {
        setQuote(data.slip.advice);
        setIsPending(false);
      })

      .catch((err) => {
        setError(true);
        setIsPending(false);
        console.log(err);
      });
  }, []);

  return { quote, isPending, error };
}

export default useFetch;
