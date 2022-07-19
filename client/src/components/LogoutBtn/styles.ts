import styled from 'styled-components'

export const LogoutContainer = styled.div`
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row-reverse;

  button {
    background-color: var(--green);
    border: 1px solid var(--blue-light);
    padding: 1rem 1.5rem 1rem 1rem;

    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 0%,
      100% 50%,
      60% 100%,
      60% 80%,
      0% 80%
    );

    a {
      text-decoration: none;
      color: var(--blue-light);
      font-weight: bold;
    }
  }
`
