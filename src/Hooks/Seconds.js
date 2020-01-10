import { useState, useEffect } from "react";


const Seconds = () => {

  const [ seconds, setSeconds ] = useState(0);

  // @See Use efect replace:
  // ComponenDidMount, compoenentDidUpdate and componentDidWillUnmount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [seconds]);

  return seconds;
}

export default Seconds;
