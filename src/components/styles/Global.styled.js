import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin: 0;

    > div {
      height: 100%;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  main {
    height: 100%;
  }

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    color: #CBCBCC;
  }

  input {
    &:focus, &:active {
      outline: none;
      border: 1px solid transparent;
      background-image: linear-gradient(white, white), ${({
				gradientFromColor,
				gradientToColor,
			}) =>
				gradientFromColor && gradientToColor
					? `linear-gradient(to right, ${gradientFromColor}, ${gradientToColor})`
					: "none"};
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }
  }
`;