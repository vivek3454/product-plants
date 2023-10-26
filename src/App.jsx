import Header from "./components/Header";
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
    </>
  );
};

export default App;