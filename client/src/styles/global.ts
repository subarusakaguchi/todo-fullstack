import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --blue-light: #6933ff;
    --background: #f0f2f5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, textarea, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button, input[type="button"], input[type="submit"] {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .checkmark {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: var(--background);
    border-radius: 2px;

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 6px;
      top: 3px;
      width: 3px;
      height: 6px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`
