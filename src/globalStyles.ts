import styled, { createGlobalStyle } from 'styled-components';

export const root = {
  primaryBgColor: '#01020a',
  primaryTextColor: '#fffecb',
  secondaryBgColor: '#fffecb',
  borderColor: '#fffecb',
  secondaryTextColor: '#01020a',
  oddColor: '#fea82f',
};

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color:  ${root.oddColor} ${root.primaryBgColor};
}

body {
    background-color: ${root.primaryBgColor};
    color: ${root.primaryTextColor};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 300;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 0;
}


body::-webkit-scrollbar {
  width: 0.8rem;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px ${root.primaryBgColor};
}
 
body::-webkit-scrollbar-thumb {
  background-color:  ${root.oddColor};
  border-radius: 50px;
}
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export default GlobalStyles;
