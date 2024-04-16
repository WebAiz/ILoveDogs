"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
