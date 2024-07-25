import window from "../imgs/window.png";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <div className="page-component">
      <Container>
        <StyledDiv>
          <WindowXP src={window}></WindowXP>
          <AboutMeSection>
            <StyledH1>About me!</StyledH1>
            <StyledP>
              Heihachi Mishima (三島 平八 Mishima Heihachi?) is one of the main
              characters in the Tekken series. He debuted in the first game in
              the series and has returned for all subsequent titles until Tekken
              8. Though seen as the main protagonist of the second game, he is
              the main antagonist of the series and almost always responsible
              for the cataclysmic events. He was central to the stories of
              Tekken 5 and Tekken 6 but returned as the main protagonist of
              Tekken 7. Heihachi is the son of Jinpachi Mishima, the husband of
              Kazumi Mishima, the father of Kazuya Mishima, Lars Alexandersson,
              and Reina, the adoptive father of Lee Chaolan, and the paternal
              grandfather of Jin Kazama.
            </StyledP>
          </AboutMeSection>
        </StyledDiv>
      </Container>
    </div>
  );
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const WindowXP = styled.img`
  max-height: 560px;
  max-width: 560px;
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 30px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.01);
    transform-origin: center;
  }
  @media (max-width: 1280px) {
    max-width: 500px;
    margin-right: 10px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const AboutMeSection = styled.div`
  padding-left: 100px;
  max-width: 600px;
  @media (max-width: 1280px) {
    padding-left: 10px;
    max-witdh: 100%;
  }
`;

const StyledH1 = styled.h1`
  border-bottom: 3px solid grey;
  border-radius: 5px;
  text-align: left;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: 20px;
  letter-spacing: 3px;
  max-width: 35ch;
  text-align: left;
  line-height: 1.3;
  @media (max-width: 1280px) {
    max-width: 100%;
  }
`;
