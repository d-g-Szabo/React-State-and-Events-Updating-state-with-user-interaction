import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HamburgerDiv from "./components/HamburgeDiv";

export default function App() {
  return (
    <>
      <Header />
      <HamburgerDiv
        name="Chesseburger"
        src=""
        description="A good chesseburger"
      />
      <HamburgerDiv
        name="Double Chesseburger"
        src=""
        description="A delecious double Cheeseburger"
      />
      <Footer />
    </>
  );
}
