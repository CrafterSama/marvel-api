import styled from 'styled-components'

// Layout Styles
export const Layout = styled.div`
  color: #333;
  background-color: #f0f0f0;
`;
// /endLayout Styles

// Header
export const HeaderContainer = styled.nav`
  background-color: #fff;
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
  background-color: #fff;
  padding: 0 15px;
  border-right: 2px solid #f1f1f1;
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
  align-content: center;
`;

export const StyledInput = styled.input`
  padding: 6px;
  border: medium none;
  width: 100%;
  color: rgb(57, 62, 70);
  background-color: rgb(255, 255, 255);
  font-size: 18px;
`;

export const FavoriteContainer = styled.div`
  background-color: #fff;
`;

export const StarImageBox = styled.div`
  background-color: #fff;
`;

export const StarImage = styled.div`
  background-color: #fff;
`;
// /endHeader

// Home
export const HomeContainer = styled.section`
  margin: 0 auto;
  padding: 50px 15px;
  max-width: 80%;
  @media (min-width: 993px) {
    max-width: 50%;
  }
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

// Footer
export const FooterContainer = styled.div`
  background-color: #fff;
  padding: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-top: 1px solid #ccc;
  & a, a:hover, a:focus, a:visited {
    color: #ec1d24;
  }
`;
// /endFooter
