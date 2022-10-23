import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;
export const ReviewItem = styled.li`
  border: 2px solid pink;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  padding: 15px;
  width: 800px;

  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ReviewInfoHeader = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;

  color: #570434;
`;

export const ReviewInfo = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;

  color: #b9518f;
`;
