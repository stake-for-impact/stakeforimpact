import { ConnectKitProvider } from "connectkit";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import { config } from "./wagmi";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import AddCause from "./routes/add";
import Index from "./routes";
import Detail, { loader as detailLoader } from "./routes/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "create",
        element: <AddCause />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
        loader: detailLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <RouterProvider router={router} />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
