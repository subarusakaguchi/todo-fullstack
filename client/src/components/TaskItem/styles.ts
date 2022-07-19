import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 1rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 14px;
    outline: 0;

    p,
    h4 {
      font-size: 1rem;
      color: #ffffff;
    }

    &.completed {
      p,
      h4 {
        text-decoration: line-through;
        opacity: 0.7;
      }
    }

    label {
      display: block;
      position: relative;
      padding-left: 14px;
      margin-bottom: 18px;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked {
          & ~ .checkmark {
            background-color: var(--green);
          }

          & ~ .checkmark:after {
            display: block;
          }
        }
      }
    }
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: var(--red);
    }

    &:hover {
      svg {
        filter: brightness(0.5);
      }
    }
  }
`
