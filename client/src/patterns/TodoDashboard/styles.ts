import styled from 'styled-components'

export const TaskListContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  background: var(--blue);
  border-radius: 1rem;

  padding: 70px 60px;

  filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
`

export const TaskListBody = styled.section`
  margin-top: 3rem;

  ul {
    list-style: none;
  }
`
