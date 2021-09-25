import styled, { keyframes } from 'styled-components'

const gradient = keyframes`
    {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const AppDiv = styled.div`
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${gradient} 15s ease infinite;
    width: 100vw;
    height: 100vh;
`;

export const AppButton = styled.button`
    border-radius: 3px;
    border: 2px solid #ff9933;
    color: #ff9933;
    margin: 5px;
    padding: 5px;    
    width: 200px;
    height: 50px;
    background: linear-gradient(to right, #eee, #eee);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.5s 0s;

    &:hover{
      background-size: 100% 100%;
    } 
`;

export const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginH1 = styled.h1`
    color: black; font-family: 'Raleway',sans-serif; font-size: 36px; font-weight: 800; line-height: 72px;  text-align: center; text-transform: uppercase;
`;

export const LoginInput = styled.input`
    padding: 5px;
    margin: 5px;
    width: 200px;
    height: 50px;
    background: transparent;
    border-color: #ff9933;
    background: linear-gradient(to right, #eee, #eee);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.5s 0s;
    ::placeholder {color: #ff9933;}

    &:focus{
        outline: none;
        background-size: 100% 100%;
    }
`;
