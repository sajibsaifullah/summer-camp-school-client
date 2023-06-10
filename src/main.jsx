import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders/AuthProviders";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-lg mx-auto">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>
);
