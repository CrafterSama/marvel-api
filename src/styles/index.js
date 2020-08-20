// eslint-disable-in-file
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout Styles
export const Layout = styled.div`
  color: ${({ darkmode }) => (darkmode === 'on' ? '#fff' : '#555')};
  background-color: ${({ darkmode }) =>
    darkmode === 'on' ? '#555' : ';#f0f0f0'};
`;
// /endLayout Styles

// Header
export const HeaderContainer = styled.nav`
  background-color: ${({ darkmode }) => darkmode === 'on' ? '#333' : '#fff' };
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
  border-right: 2px solid ${({ darkmode }) => darkmode === 'on' ? '#999' : '#f1f1f1' };
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
  color: ${({ darkmode }) =>
    darkmode === 'on' ? '#fff' : '#333'};
  background-color: ${({ darkmode }) =>
    darkmode === 'on' ? '#333' : '#fff'};
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
  border-left: 2px solid ${({ darkmode }) => darkmode === 'on' ? '#999' : '#f1f1f1'};
`;

export const IconImage = styled(FontAwesomeIcon)`
  color: #ccc;
  font-size: 22px;
  ${({ active }) => active && `
    color: #333;
  `}
`;

export const IconImageMoon = styled(FontAwesomeIcon)`
  display: ${({ darkmode }) => darkmode === 'on' ? 'none' : 'flex' };
  font-size: 22px;
  color: #555;
`;

export const IconImageSun = styled(FontAwesomeIcon)`
  display: ${({ darkmode }) => darkmode === 'on' ? 'flex' : 'none' };
  font-size: 22px;
  color: #eabe3a;
`;

// /endHeader

// Home
export const HomeContainer = styled.section`
  margin: 0 auto;
  padding: 50px 15px;
  min-height: 800px;
  max-width: 80%;
  position: relative;
  @media (min-width: 993px) {
    max-width: 50%;
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  align-content: flex-start;
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
  min-height: 350px;
  min-width: 200px;
  -webkit-box-flex: 1;
  flex: 1 0 30%;
  margin: 10px;
  display: flex;
  justify-content: center;
`;


// CharacterCard
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

export const CharacterInfo = styled.div`
  top: 0;
  position: relative;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CharacterName = styled.div`
  display: flex;
  align-items: flex-end;
  > span {
    color: #fff;
    font-weight: 500;
    text-shadow: 0 1px 2px #333;
  }
`;

// /CharacterCard

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

const fadeOut = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }

  to {
    transform: translateY(-50px);
    opacity: 0;
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
  min-width: 350px;
  max-width: 600px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  @media(max-width: 400px) {
    width: 300px;
  }
`;

export const ModalHeader = styled.div`
  min-height: 35px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  > h4 {
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
  &:hover {
    cursor: pointer;
  }
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
`;

export const CharacterModalName = styled.h4`
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 10px;
`;

export const CharacterDescription = styled.p`
  font-size: 15px;
  margin: 0;
  > span {
    font-weight: 500;
  }
`;

export const ComicList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ComicListItem = styled.li`
  display: flex;
`;

// Footer
export const FooterContainer = styled.div`
  background-color: ${({ darkmode }) => darkmode === 'on' ? '#333' : '#fff' };
  padding: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-top: 1px solid ${({ darkmode }) => darkmode === 'on' ? '#999' : '#ccc' };
  & a, a:hover, a:focus, a:visited {
    color: #ec1d24;
  }
`;
// /endFooter
