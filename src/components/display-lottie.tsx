"use client";

import Lottie from "react-lottie";

interface DisplayLottieProps {
  animationData: any;
  [anyProp: string]: any;
}

function DisplayLottie({ animationData, ...props }: DisplayLottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} {...props} />;
}

export default DisplayLottie;
