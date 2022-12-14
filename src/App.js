import { useState } from "react";
import Header from "components/Header";
import Home from "pages/Home";
import Footer from "components/Footer";

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <div className="d-flex flex-column flex-fill vh-100">
      <Header />
      {page === "homepage" && <Home />}
      <Footer />
    </div>
  );
}

export default App;
