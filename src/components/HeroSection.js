import styled from "styled-components";
import profileImage from "../imgs/pfp.png";
import { GitHubIcon, LinkedInIcon } from "./ProjectIcons";

const HeroSection = () => {
  return (
    <Container>
      <>
        <ProfilePicture src={profileImage} />
        <h1>Aaron John Mandal</h1>
        <StyledParagraph>
          Hello, I am Aaron! I am a web developer student. Please feel free to
          reach out if you are interested to work with me!
        </StyledParagraph>
        <div>
          <IconLinks href="#">
            <GitHubIcon />
          </IconLinks>
          <IconLinks href="#">
            <LinkedInIcon />
          </IconLinks>
        </div>
        <TechSkill>
          <h2>Coding Skills</h2>
          <i
            class="fa-brands fa-html5 fa-3x"
            aria-label="HTML"
            title="HTML"
          ></i>
          <i
            class="fa-brands fa-css3-alt fa-3x"
            aria-label="CSS"
            title="CSS"
          ></i>
          <i
            class="fa-brands fa-js fa-3x"
            aria-label="Javascript"
            title="Javascript"
          ></i>
          <i
            class="fa-brands fa-react fa-3x"
            aria-label="React"
            title="React"
          ></i>
        </TechSkill>
      </>
    </Container>
  );
};

export default HeroSection;

const StyledParagraph = styled.div`
  font-size: 15px;
  max-width: 40ch;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 10%;
`;

const ProfilePicture = styled.img`
  border-radius: 40%;
  user-select: none;
  }
`;

const IconLinks = styled.a`
  margin: 10px;
  display: inline-block;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.3);
    transform-origin: center;
  }
`;

const TechSkill = styled.div`
  margin-top: 50px;
  display: flex;

  h2 {
    margin-right: 20px;
  }

  i {
    margin: 10px;
  }
`;
