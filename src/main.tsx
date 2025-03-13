import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { ThemeWrapper } from "./ThemeProvider";
import "./nullstyle.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </Provider>
    </HashRouter>
  </StrictMode>
);
