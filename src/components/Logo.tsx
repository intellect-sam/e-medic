import React from "react";
import logo from "../assets/images/logo.png"

interface LogoProps {
  size?: "lg" | "sm";
}

const Logo: React.FC<LogoProps> = ({size}) => {
  return (
    <img src={logo} alt="logo" width={size === "lg" ? 100 : size === "sm" ? 50 : undefined} />
  )
}

export default Logo