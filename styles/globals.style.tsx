import { css, GlobalStyles as Global } from "@mui/material";
import { FunctionComponent } from "react";

const GlobalStyles: FunctionComponent = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }

        body {
          transition: all 0.3s linear;
          transition: padding 0s;
        }

        html,
        body,
        body > div,
        main,
        main > div {
          min-height: 100%;
          height: 100%;
        }

        .MuiBackdrop-root {
          backdrop-filter: blur(8px);
          background-color: rgb(0, 0, 0, 0.1) !important;
        }

        // Blue outline icons

        .icon-outline > img,
        img.icon-outline {
          filter: contrast(0.9) saturate(0.7);
        }

        // Animations

        @keyframes backgroundGradientRotate {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
