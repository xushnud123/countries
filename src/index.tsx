import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "assets/styles/main.scss";

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
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
