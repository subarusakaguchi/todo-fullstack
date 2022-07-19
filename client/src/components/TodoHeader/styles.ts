import styled from 'styled-components'

export const HeaderTaskListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--green);
    font-size: 2.25rem;
  }

  div {
    display: flex;
    gap: 0.25rem;
    align-items: center;

    font-size: 16px;

    input {
      flex: 1;
      background: var(--shape);
      border: 0;
      color: var(--text);
      padding: 12px 24px;

      border-radius: 8px;
      border: 0;

      &::placeholder {
        color: var(--text-light);
      }
    }

    button {
      font-weight: 600;
      border-radius: 8px;
      border: 0;
      background: var(--green);
      color: #fff;
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 14px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`
