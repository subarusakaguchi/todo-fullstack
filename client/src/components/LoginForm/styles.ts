import styled from 'styled-components'

export const FormContent = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: 15rem auto;
    padding: 2rem;
    border-radius: 0.5rem;
    height: auto;

    background-color: var(--blue);

    input {
      width: 20rem;
      padding: 0.5rem;
      border-radius: 0.25rem;
      margin-top: 0.75rem;
    }

    input[type='submit'] {
      background-color: var(--green);
      color: var(--blue-light);
      border: 1px solid var(--blue-light);
      font-size: 1.25rem;
      font-weight: bold;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    a {
      text-decoration: none;
      width: 100%;
      text-align: center;
      cursor: pointer;

      margin-top: 0.25rem;

      color: var(--shape);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
