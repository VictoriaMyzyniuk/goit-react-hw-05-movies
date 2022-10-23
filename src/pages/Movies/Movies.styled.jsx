import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MoviesHeader = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  color: #c01062;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoviesMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormEl = styled(Form)`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;
export const FieldEl = styled(Field)`
  width: 400px;
  height: 50px;
  border-radius: 15px;
  outline-color: pink;
  border: none;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
  color: #a20d64;
`;

export const MoviesButton = styled.button`
  display: inline-block;
  width: 200px;

  height: 48px;

  position: relative;
  border: 0;
  opacity: 0.6;
  border-radius: 15px;
  background-color: pink;
  color: #a20d64;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 20px;
`;

export const InfoHeader = styled.p`
  margin-top: 30px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #570434;
`;
