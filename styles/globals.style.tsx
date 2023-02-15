import { css, GlobalStyles as Global } from "@mui/material";
import { FunctionComponent } from "react";

const GlobalStyles: FunctionComponent = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;

          --talisman-connect-control-background: #29333b;
          --talisman-connect-control-foreground: inherit;
          --talisman-connect-active-background: #1f2237;
          --talisman-connect-active-foreground: inherit;
          --talisman-connect-modal-background: #1b1e31;
          --talisman-connect-modal-foreground: #fafafa;
          --talisman-connect-button-background: var(
            --talisman-connect-control-background
          );
          --talisman-connect-button-foreground: #fafafa;
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
      `}
    />
  );
};

export default GlobalStyles;
