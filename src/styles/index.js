// eslint-disable-in-file
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.backgroundBody};
  }

  body {
    background-color: ${(props) => props.theme.backgroundBody};
    height: 100vh;
    margin: 0;
    max-width: 100vw;
    overscroll-behavior: none;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }

  * {
    box-sizing: border-box;
  }
  input {
    border: none;
    outline: none;
  }
`;

// ErrorBox
export const ErrorBox = styled.h2`
  padding: 15px;
  text-align: center;
`;

// Layout Styles
export const MainLayout = styled.div`
  color: ${props => props.theme.textHeader};
  background-color: ${props => props.theme.backgroundBody};
`;
// /endLayout Styles

// Header
export const HeaderContainer = styled.nav`
  background-color: ${props => props.theme.backgroundHeader};;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: 100%;
`;

export const LogoContainer = styled.div`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const ImageContainer = styled.div`
  padding: 0 15px;
  border-right: 2px solid ${props => props.theme.border};
  display: flex;
  justify-content: center;
  align-content: center;
  height: 32px;
  & img {
    max-width: 80px;
  }
`;

export const SearchInputContainer = styled.div`
  flex: 1 1 auto;
  padding: 8px 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 6px;
  border: medium none;
  width: 100%;
  color: ${props => props.theme.textHeader};
  background-color: ${props => props.theme.backgroundHeader};
  font-size: 18px;
`;

export const NavbarImageContainer = styled.div`
  display: flex;
  height: 50px;
  padding: 10px 0;
`;

export const ImageBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  border-left: 2px solid ${props => props.theme.border};
`;

export const IconImage = styled(FontAwesomeIcon)`
  color: #ccc;
  font-size: 22px;
  ${({ active }) => active && `
    color: #333;
  `}
  ${({ faicon }) => faicon === 'faStart' && `
    cursor: pointer;
  `}
`;

export const IconImageMoon = styled(FontAwesomeIcon)`
  font-size: 22px;
  color: #555;
  cursor: pointer;
`;

export const IconImageSun = styled(FontAwesomeIcon)`
  font-size: 22px;
  color: #eabe3a;
  cursor: pointer;
`;

// /endHeader

export const Container = styled.section`
  margin: 0 auto;
  padding: 10px;
  height: 100vh;
  max-width: 992px;
  width: 100%;
  position: relative;
  /* @media (min-width: 1024px) {
    max-width: ;
  } */
`;

// Home

export const SectionTitle = styled.h3`
  background: ${(props) => props.theme.link};
  color: #fff;
  padding: 10px;
  border-left: 7px solid #ccc;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Main
export const MainGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  -moz-box-pack: justify;
  justify-content: space-between;
`;

export const MainGridItem = styled.div`
  min-height: 450px;
  min-width: 250px;
  -webkit-box-flex: 1;
  flex: 1 0 30%;
  margin: 10px;
  display: flex;
  justify-content: center;
`;


// Card
export const Card = styled.div`
  ${({ background }) => background && `
    background-image: url(${background.path}.${background.extension});
  `}
  background-color: #ccc;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 0 3px #333;
`;

export const Overlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    205deg,
    rgba(33, 33, 33, 1) 1%,
    rgba(33, 33, 33, 0) 30%,
    rgba(33, 33, 33, 0) 65%,
    rgba(33, 33, 33, 1) 99%
  );
  border-radius: 3px;
`;

export const CardInfo = styled.div`
  top: 0;
  position: relative;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const CardName = styled.div`
  display: flex;
  align-items: flex-end;
  > span {
    color: #fff;
    font-weight: 500;
    text-shadow: 0 1px 2px #333;
  }
`;

// /Card

// Animation

const fadeIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

// Modal

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled.div`
  display: inline-block;
  visibility: ${(props) => (props.in ? 'hidden' : 'visible')};
  animation: ${fadeIn} .1s linear;
  transition: visibility 1s linear;
  position: relative;
  min-width: 280px;
  max-width: 600px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  @media(max-width: 400px) {
    min-width: 300px;
  }
`;

export const ModalHeader = styled.div`
  min-height: 35px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  > h3 {
    font-weight: 500;
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
  overflow-y: auto;
  max-height: 480px;
`;

export const CloseButton = styled.button`
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  position: relative;
  cursor: pointer;
`;
export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

export const CharacterModal = styled.div`
  display: grid;
  width: 100%;
`;

export const CharacterModalName = styled.h4`
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 10px;
`;

export const CharacterDescription = styled.p`
  font-size: 14px;
  margin: 0 0 10px;
  > span {
    font-weight: 500;
  }
`;

export const ComicList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  > h4 {
    font-weight: 400;
  }
`;
export const ComicListItem = styled.li`
  display: grid;
  grid-template-columns: 60px 1fr;
  font-size: 14px;
  gap: 20px;
  margin-bottom: 10px;
`;

export const ComicImage = styled.div`
  width: 70px;
  height: 100px;
  border-radius: 3px;
  box-shadow: 0 0 2px #999;
  overflow: hidden;
  margin-right: 10px;
  > img {
    width: 70px;
    height: 100px;
    object-fit: cover;
    object-position: center;
  }
`;

export const ComicTitle = styled.div`
  a, a:hover, a:visited, a:focus {
    font-weight: 500;
    color: ${(props) => props.theme.link};
    text-decoration: none;
    border-bottom: 1px solid ${(props) => props.theme.link};
  }
  p {
    font-size: 12px;
  }
`;

// ComicDetails
export const ComicDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BoxCover = styled.div`
  display: flex;
  justify-content: center;
`;

export const ComicImageBox = styled.div`
${({ background }) => background && `
    background-image: url(${background.path}.${background.extension});
  `}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-width: 300px;
  max-width: 450px;
  min-height: 450px;
  max-height: 680px;
  border-radius: 3px;
  box-shadow: 0 0 2px #999;
  @media (min-width: 480px) {
    min-height: 680px;
  }
`;

export const ComicInfo = styled.div`
  h2 {
    margin: 0 0 15px;
  }
`;

export const ComicCreators = styled.div`
  display: grid;
`;

export const DetailsItem = styled.div`
  margin: 10px 0;
`;

export const TextStrong = styled.div`
  font-weight: 500;
`;


// Footer
export const FooterContainer = styled.div`
  background-color: ${props => props.theme.backgroundHeader};
  padding: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.border};
  & a, a:hover, a:focus, a:visited {
    color: ${props => props.theme.link};
  }
`;
// /endFooter
