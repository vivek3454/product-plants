import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1350px] mx-auto px-5">
        <HeroSection />
      </div>
    </>
  );
};

export default App;