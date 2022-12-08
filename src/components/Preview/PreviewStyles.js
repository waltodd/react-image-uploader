import styled from "styled-components";


export const Wrapper = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;
export const Form = styled.div`

border-radius: 12px;
background: #FFFFFF;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
width: 402px;
height: 469px;
position:relative;
flex-direction: column;
display: flex;

align-items: center;

`;

export const Title = styled.h1`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1.5rem;
line-height: 27px;
padding:0rem 0rem;
`;

export const SubtitleType = styled.p`

color: #828282;
padding:.5rem 0rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: .8rem;
line-height: 15px;
/* identical to box height */

text-align: center;
letter-spacing: -0.035em;
`;

export const Image = styled.img`

width: 338px;
height: 224.4px;
border-radius: 12px;
`;


export const ClipBoardContainer = styled.div`

box-sizing: border-box;
width: 338px;
height: 34px;
background: #F6F8FB;
border: 1px solid #E0E0E0;
border-radius: 8px;
margin:1rem 0;
display: flex;
grid-area: 1 / 2 / 2 / 4;
justify-content: center;
align-items: center;
`;

export const CopiedInput = styled.input`


font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
background: #F6F8FB;
border: none;
padding: 0rem.5rem;

text-align: left;
width:100%;

/* Gray 2 */

color: #4F4F4F;

:focus {
    outline: none;

  }

`;

export const BtnCopy = styled.button`

background: #2F80ED;
border-radius: 8px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
/* identical to box height */

text-align: center;
padding:.5rem 1rem;
color: #FFFFFF;
border:none;
margin-right:.1rem;
cursor:pointer;

`;
