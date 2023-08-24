export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#ECECEC",
      100: "#D8D8D8",
      200: "#B0B0B0",
      300: "#8C8C8C",
      400: "#696969",
      500: "#444444",
      600: "#333333",
      700: "#222222",
      800: "#111111",
      900: "#000000",
      1000: "#000000",
    },
    primary: {
      50: "#E6F5FF",
      100: "#B3DFFF",
      200: "#80C8FF",
      300: "#4DA1FF",
      400: "#198AFF",
      500: "#0066FF",
      600: "#0055CC",
      700: "#004499",
      800: "#003366",
      900: "#001A33",
    },
  };
  
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[600],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // Light mode palette values
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[600],
                main: colorTokens.grey[400],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[200],
                light: colorTokens.grey[0],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
        },
        typography: {
            fontFamily: ["Handjet", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Handjet", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Handjet", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Handjet", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Handjet", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Handjet", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Handjet", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
  };