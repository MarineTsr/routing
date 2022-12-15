import Header from "components/Header";
import Loader from "components/Layout/Loader";
import {
  Outlet,
  useLocation,
  useNavigation,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "components/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    console.log("Location : ", location);
    console.log("Navigation : ", navigation);
  }, [location, navigation]);

  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header />
      <main className="main-content flex-fill">
        <div className="container">
          {navigation.state === "loading" ? <Loader /> : <Outlet />}
        </div>
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
