import styled from '@emotion/styled';

export const CastImg = styled.img`
  width: 130px;
  height: 200px;
  border-radius: 15px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;
export const CastItem = styled.li`
  width: 300px;
  border: 2px solid pink;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  padding: 15px;

  border-radius: 15px;
`;
export const CastInfoHeader = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #570434;
`;

export const CastInfo = styled.div`
  font-size: 15px;
  font-weight: 500;

  color: #b9518f;
`;

export const CastWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
