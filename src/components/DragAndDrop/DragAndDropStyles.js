import styled from "styled-components";


export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Form = styled.div`

    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 402px;
    height: 469px;
    position:relative;

`;

export const Title = styled.h1`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1.5rem;
line-height: 27px;
padding:.5rem 0rem;
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

export const DropCard = styled.div`
box-sizing: border-box;
width: 338px;
height: 218.9px;
margin: auto 2rem;
display: flex;
justify-content: center;
flex-direction:column;
align-items:center;
background: #F6F8FB;
border: 1px dashed #97BEF4;
border-radius: 12px;

`;

export const Img = styled.img`
    width: 8rem;
    height: 6rem;
    padding:.5rem 0;

`;

export const Text = styled.p`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: .9rem;
line-height: 18px;
/* identical to box height */

letter-spacing: -0.035em;

color: #BDBDBD;


`;

export const Button = styled.div`

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: .9rem;
text-align: center;
color: #FFFFFF;
background: #2F80ED;
border-radius: 8px;
padding:.7rem .8rem;
cursor:pointer;
margin:0 8rem;
`;