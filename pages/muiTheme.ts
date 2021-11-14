import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: "#96A885"
    }
  }
});

export const orangeTheme = createTheme({
  palette: {
    primary: {
      main: "#FFB673"
    }
  }
});
