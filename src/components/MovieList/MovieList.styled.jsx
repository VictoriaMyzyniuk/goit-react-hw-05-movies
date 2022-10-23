import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Item = styled.li`
  width: 200px;
  height: 120px;
  border: 2px solid pink;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 15px;
`;

export const StyledLinkMovie = styled(NavLink)`
  color: #97055a;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: #c01062;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f10337;
  }
`;
