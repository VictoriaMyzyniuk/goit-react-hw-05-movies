import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  padding: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: #c01062;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 400px;

  height: 48px;
  margin-left: 30px;
  position: relative;
  border: 0;
  opacity: 0.6;
  border-radius: 15px;
  background-color: #fff;
  cursor: pointer;
  outline: none;
`;

export const Message = styled.p`
  color: #570434;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;

  display: flex;
  align-items: baseline;
`;
