import styled, { css } from 'styled-components';

const TextField = styled.input`
  display: flex;
  padding-top: 15px;
  margin-bottom: 20px;
  position: relative;
  label {
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    color: rgba(0, 0, 0, 0.54);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ${props =>
    props.floated &&
    css`
      label {
        transition: all 0.4s ease-in-out;
        transform: translate(0, 15px);
        font-size: 16px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.26);
        text-overflow: clip;
        cursor: text;
        pointer-events: none;
      }
    `}
`;

export default TextField;
