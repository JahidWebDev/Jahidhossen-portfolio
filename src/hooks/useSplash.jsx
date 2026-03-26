import { useState } from "react";

const useSplash = () => {
  const [isSplashing, setIsSplashing] = useState(false);

  const startSplash = () => {
    setIsSplashing(true);

    setTimeout(() => {
      setIsSplashing(false);
    }, 1200);
  };

  return { isSplashing, startSplash };
};

export default useSplash;