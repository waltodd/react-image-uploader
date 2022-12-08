import styled from "styled-components";
import { keyframes } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const moveIn = keyframes`
from { left: -200px; }
to   { left: 10px; }
`;
export const moveOut = keyframes`
from { left: 10px; }
    to   { left: -200px; }
`;

export const ErrorContainer = styled.div`
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 1rem;
  color: red;
  position: fixed;
  left: -200px;
  animation: ${moveIn} 0.5s ease forwards, ${moveOut} 0.5s 3s ease forwards;
`;
export const Form = styled.div`
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 402px;
  height: 469px;
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 27px;
  padding: 0.5rem 0rem;
`;

export const SubtitleType = styled.p`
  color: #828282;
  padding: 0.5rem 0rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 15px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;
`;

export const DropCard = styled.div`
  box-sizing: border-box;
  width: 338px;
  height: 218.9px;
  margin: auto 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #f6f8fb;
  border: 1px dashed #97bef4;
  border-radius: 12px;
`;

export const Img = styled.img`
  width: 8rem;
  height: 6rem;
  padding: 0.5rem 0;
`;

export const Text = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.035em;

  color: #bdbdbd;
`;

export const Button = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  color: #ffffff;
  background: #2f80ed;
  border-radius: 8px;
  padding: 0.7rem 0.8rem;
  cursor: pointer;
  margin: 0 8rem;
`;
