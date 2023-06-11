import { createGlobalStyle, DefaultTheme } from "styled-components";

interface ThemeProps {
  theme: DefaultTheme;
}

const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
};

// Define your custom theme interface
interface CustomTheme extends DefaultTheme {
  palette: {
    grey: {
      white: string;
    };
  };
  breakpoints: typeof breakpoints;
}

const GlobalStyles = createGlobalStyle<ThemeProps>`
    html {
        scroll-behavior: smooth;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        position: relative;
        font-family: 'Poppins', sans-serif;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }: ThemeProps) => theme.palette.grey.white};
    }

    button {
        font-family: 'Poppins', sans-serif;
    }

    ul, ol {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        &:hover, &:active, &:visited  {
            color: #323130;
            text-decoration: none;
        }
    }
    p {
        font-size: 20px;
        line-height: 28px;

        @media (max-width: ${({ theme }: ThemeProps) => (theme as CustomTheme).breakpoints.sm}) {
            font-size: 18px;
        }

        @media (max-width: ${({ theme }: ThemeProps) => (theme as CustomTheme).breakpoints.xs}) {
            font-size: 16px;
        }
    }

    span {
        font-size: 12px;
        line-height: 18px;
    }

    small {
        font-size: 12px;
    }
`;

export default GlobalStyles;
