import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 160 160" {...props}>
      <image width={160} height={160} href="/images/loading.png"/>
    </Svg>
  );
};

export default Icon;
