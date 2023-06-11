interface Theme {
  palette: {
    divider: string;
    border: {
      default: string;
      hover: string;
    };
    main: {
      primary: {
        primary: string;
        lighterAlt: string;
        lighter: string;
        light: string;
      };
      tertiary: {
        tertiary: string;
        darkAlt: string;
        dark: string;
        darker: string;
      };
    };
    status: {
      error: {
        background: string;
        color: string;
      };
      success: {
        background: string;
        color: string;
      };
      warning: {
        background: string;
        color: string;
      };
      severeWarning: {
        background: string;
        color: string;
      };
    };
    overlay: {
      light: string;
      dark: string;
    };
    grey: {
      white: string;
      shades: {
        ten: string;
        twenty: string;
        thirty: string;
        sixty: string;
        nintey: string;
        oneThirty: string;
        oneSixty: string;
        oneNinty: string;
      };
    };
  };
  spacing: (num?: number) => string;
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    touch: number;
    xl: number;
    up: (screen: string) => string;
    down: (screen: string) => string;
  };
}

const theme: Theme = {
  palette: {
    divider: "#EDEBE9",
    border: {
      default: "#8A8886",
      hover: "#323130",
    },
    main: {
      primary: {
        primary: "#141AE9",
        lighterAlt: "#EFF6FC",
        lighter: "#DEECF9",
        light: "#C7E0F4",
      },
      tertiary: {
        tertiary: "#3D94DF",
        darkAlt: "#1E78C6",
        dark: "#1166A6",
        darker: "#0D4E7E",
      },
    },
    status: {
      error: {
        background: "#FDE7E9",
        color: "#A80000",
      },
      success: {
        background: "#DFF6DD",
        color: "#107C10",
      },
      warning: {
        background: "#FFF4CE",
        color: "#797775",
      },
      severeWarning: {
        background: "#FED9CC",
        color: "#D83B01",
      },
    },
    overlay: {
      light: "rgba(255, 255, 255, 0.4)",
      dark: "rgba(0, 0, 0, 0.4)",
    },
    grey: {
      white: "#FFFFFF",
      shades: {
        ten: "#FAF9F8",
        twenty: "#F3F2F1",
        thirty: "#EDEBE9",
        sixty: "#C8C6C4",
        nintey: "#A19F9D",
        oneThirty: "#605E5C",
        oneSixty: "#323130",
        oneNinty: "#201F1E",
      },
    },
  },
  spacing: (num = 1) => {
    return `${8 * num}px`;
  },
  breakpoints: {
    xs: 480,
    sm: 767,
    md: 959,
    lg: 1023,
    touch: 1199,
    xl: 1439,
    up(screen) {
      switch (screen) {
        case "xs":
          return `@media (min-width: ${this.xs + 1}px)`;
        case "sm":
          return `@media (min-width: ${this.sm + 1}px)`;
        case "md":
          return `@media (min-width: ${this.md + 1}px)`;
        case "lg":
          return `@media (min-width: ${this.lg + 1}px)`;
        case "touch":
          return `@media (min-width: ${this.touch + 1}px)`;
        case "xl":
          return `@media (min-width: ${this.xl + 1}px)`;
        default:
          return ``;
      }
    },
    down(screen) {
      switch (screen) {
        case "xs":
          return `@media (max-width: ${this.xs}px)`;
        case "sm":
          return `@media (max-width: ${this.sm}px)`;
        case "md":
          return `@media (max-width: ${this.md}px)`;
        case "lg":
          return `@media (max-width: ${this.lg}px)`;
        case "touch":
          return `@media (max-width: ${this.touch}px)`;
        case "xl":
          return `@media (max-width: ${this.xl}px)`;
        default:
          return ``;
      }
    },
  },
};

export default theme;
