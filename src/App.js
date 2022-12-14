import Header from "components/Header";
import { Outlet } from "react-router-dom";

import Footer from "components/Footer";

function App() {
  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header />
      <main className="main-content flex-fill">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
