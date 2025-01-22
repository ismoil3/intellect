import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
