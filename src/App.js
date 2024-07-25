import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import Test from "./components/Test";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div className="container">
      <GlobalStyles />
      <HeroSection />
      <AboutMe />
      <Test />
      <ContactMe />
    </div>
  );
};

export default App;
