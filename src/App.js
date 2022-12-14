import Header from "components/Header";
import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import Footer from "components/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header />
      <main className="main-content flex-fill">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
