import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "assets/styles/main.scss";
import ContextProvider from "context/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ContextProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
