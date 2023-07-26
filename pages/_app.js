import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps}/></ThemeProvider>
}
