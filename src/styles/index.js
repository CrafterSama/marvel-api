import styled from 'styled-components'

export const Main = styled.div`
  color: #333;
  background-color: #f0f0f0;
`;

export const HeaderContainer = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  background-color: #fff;
  box-shadow: 0 2px 4px #666;
`;

export const LogoContainer = styled.div`
  background-color: #fff;
  padding: 15px 0;
`;

export const ImageContainer = styled.div`
  background-color: #fff;
  padding: 0 15px;
  border-right: 2px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-content: center;
  & img {
    max-width: 75px;
  }
`;

export const SearchInputContainer = styled.div`
  background-color: #fff;
  padding: 5px 10px;
  > form {
    display: flex;
    align-content: center;
    > input {
      padding: 15px 30px;
      font-size: 18px;
      width: 100%;
    }
  }
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
