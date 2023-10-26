import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/product/ProductSection";

const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1350px] mx-auto px-5">
        <HeroSection />
        <ProductSection />
      </div>
      <Footer />
    </>
  );
};

export default App;