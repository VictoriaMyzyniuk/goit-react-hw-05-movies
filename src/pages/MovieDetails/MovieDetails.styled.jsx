import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WrapperImg = styled.div`
  display: flex;

  flex-direction: column;
`;

export const Wrapper = styled.div`
  margin-left: 30px;
  margin-top: 50px;
  display: flex;
  height: 600px;
  flex-direction: column;
`;

export const MainWrapper = styled.div`
  display: flex;
`;

export const StyledLinkCastAndReview = styled(NavLink)`
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

export const ButtonCardFilm = styled.button`
  display: inline-block;
  width: 400px;

  height: 48px;

  position: relative;
  border: 0;
  opacity: 0.6;
  border-radius: 15px;
  background-color: #fff;
  cursor: pointer;
  outline: none;
`;

export const Img = styled.img`
  width: 400px;
  height: 600px;
  border-radius: 15px;
`;

export const Name = styled.h1`
  color: #570434;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Score = styled.p`
  color: #b9518f;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 45px;
  width: 700px;
  display: flex;
`;

export const ScoreTitle = styled.p`
  color: #570434;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;

  display: flex;
  align-items: baseline;
`;

export const OverviewGenres = styled.h2`
  color: #570434;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const AdditionalList = styled.ul`
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;
export const AdditionalItem = styled.li`
  width: 100px;

  border: 2px solid pink;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 15px;
`;

export const Message = styled.div`
  text-align: center;
  color: #570434;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;

  display: flex;
  align-items: baseline;
`;
