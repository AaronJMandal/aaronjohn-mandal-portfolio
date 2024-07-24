import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HeroSection />
      <AboutMe />
    </>
  );
};

export default App;
