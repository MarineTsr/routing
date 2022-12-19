import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import AccountSummary from "./pages/Account/components/AccountSummary";
import AccountInfos from "./pages/Account/components/AccountInfos";
import Error from "./pages/Error";
import Alert from "./components/Alert";
import { accountLoader } from "./loaders/accountLoader";
import { homepageLoader } from "./loaders/homepageLoader";
import { authAction } from "./actions/authAction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: homepageLoader,
        errorElement: <Alert />,
        element: <Home />,
      },
      {
        path: "/auth",
        action: authAction,
        element: <Auth />,
      },
      {
        path: "/account",
        loader: accountLoader,
        element: <Account />,
        children: [
          {
            index: true,
            element: <AccountSummary />,
          },
          {
            path: "infos",
            element: <AccountInfos />,
          },
        ],
      },
    ],
  },
]);
