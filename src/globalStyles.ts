import styled, { createGlobalStyle } from 'styled-components';

export const root = {
  primaryBgColor: '#fafafa',
  secondaryBgColor: '#34a3a3',
  darkBgColor: '#272343',
  darkTextColor: '#272343',
  lightTextColor: '#fafafa',
  oddColor: '#acdeaa',
};

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    background-color: ${root.primaryBgColor};
    color: ${root.darkTextColor};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 300;
    height: 200vh
}
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export default GlobalStyles;
