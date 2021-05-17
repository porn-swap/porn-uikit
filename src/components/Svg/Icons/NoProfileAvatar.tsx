import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <g fill="#666171">
        <path
          d="M240 627c-91-26-173-97-213-186C-21 335 9 182 95 95 184 7 333-21 447 29c62 28 136 102 166 169 32 72 30 180-6 253-32 66-100 132-162 160-57 25-148 32-205 16zm186-24c67-23 154-110 177-177 19-56 22-148 6-194l-11-31-36 36c-21 20-62 48-92 62-47 22-68 26-150 26s-103-4-151-26c-31-15-72-43-92-62l-35-36-11 31c-16 46-13 138 6 194 22 64 110 154 173 177 60 21 155 21 216 0z"
          transform="matrix(.1 0 0 -.1 0 64)"
        />
        <path
          d="M259 585c-39-21-59-59-59-109 0-113 141-162 214-75 31 36 35 105 10 145-34 50-110 69-165 39z"
          transform="matrix(.1 0 0 -.1 0 64)"
        />
      </g>
    </Svg>
  );
};

export default Icon;
