import styled, {keyframes} from "styled-components";

const animloader = keyframes`
    0% {
        left:0;
        transform: translateX(-100%)
    }

    100% {
        left: 100%;
        transform: translateX(0%);
    }
`;

export const Title = styled.h1`
text-align:left;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1.5rem;
line-height: 27px;
padding:.5rem 0rem;
right:8rem;
position:relative;
color: #4F4F4F;

`;
export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Container = styled.div`
    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 402px;
    height: 15vh;
    position:relative;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction:column;

`;

export const Loader = styled.span`

    width: 100%;
    height: 6px;
    display: inline-block;
    position: relative;
    background: #2F80ED;
    border-radius: 8px;
    overflow: hidden;


    &:after {
        content: '';
        width: 192px;
        height: 6px;
        background: #F2F2F2;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        animation: ${animloader} 2s linear infinite;
    }

`;