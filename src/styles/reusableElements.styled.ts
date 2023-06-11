import styled, { css } from "styled-components";

interface ThemeProps {
  theme: {
    spacing: (num?: number) => string;
    breakpoints: {
      down: (screen: string) => string;
    };
    palette: {
      divider: string;
    };
  };
}


// for container
export const Container = styled.div<ThemeProps>`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(2)};
  }
`;


// for title
interface TitleProps {
  $color?: string;
  $size?: string;
  $weight?: string;
  $lHeight?: string;
}

export const Title = styled.h1<TitleProps>`
  color: ${({ $color }) => ($color ? $color : "initial")};
  font-size: ${({ $size }) => ($size ? $size : "48px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "900")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "52px")};
`;


// for Buttons
interface ButtonProps {
  $size?: string;
  $maxWidth?: string;
  $variant?: string;
  $weight?: string;
  $color?: string;
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  min-width: ${(props) => (props.$size === "xl" ? "100%" : "77px")};
  min-height: 44px;
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "288px")};
  height: ${(props) =>
    props.$size === "md" ? "48px" : props.$size === "lg" ? "80px" : "auto"};
  width: ${(props) =>
    props.$size === "md"
      ? "201px"
      : props.$size === "lg"
      ? "280px"
      : props.fullWidth
      ? "100%"
      : "auto"};
  font-size: ${(props) =>
    props.$size === "md" ? "14px" : props.$size === "lg" ? "20px" : "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(1.2)} ${({ theme }) => theme.spacing(2.5)};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #106ebe;
    color: #fff;
  }

  ${(props) => {
    switch (props.$variant) {
      case "outlined":
        return css`
          border: 1px solid #106ebe;
          color: #323130;
          background: none;
        `;
      case "disabled":
        return css`
          color: #c8c6c4;
          background: none;
          border: none;
        `;
      case "loader":
        return css`
          opacity: 0.7;
          border: none;
          background: #106ebe;
          color: #ffffff;
          font-weight: 700;
        `;
      default:
        return css`
          border: none;
          background: #106ebe;
          color: #ffffff;
          font-weight: 700;
        `;
    }
  }}

  font-weight: ${({ $weight }) => ($weight ? $weight : null)};
  color: ${({ $color }) => ($color ? $color : null)};
`;


// for loader
export const Loader = styled.div`
  border: 5px solid #106ebe;
  border-top: 5px solid lightblue;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;


// For overLayLoaders
interface OverlayLoaderProps {
  contained?: boolean;
}

export const OverlayLoader = styled.div<OverlayLoaderProps>`
  width: 100%;
  height: ${(props) => (props.contained ? "300px" : "100vh")};
  background: rgb(255, 255, 255);
  position: ${(props) => (props.contained ? "initial" : "fixed")};
  top: ${(props) => (props.contained ? "initial" : "0")};
  bottom: ${(props) => (props.contained ? "initial" : "0")};
  left: ${(props) => (props.contained ? "initial" : "0")};
  right: ${(props) => (props.contained ? "initial" : "0")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  div {
    border: 5px solid #106ebe;
    border-top: 5px solid lightblue;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
`;

export const Divider = styled.div<ThemeProps>`
  width: 85%;
  height: 2px;
  margin-top: 96px;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.palette.divider};
`;
