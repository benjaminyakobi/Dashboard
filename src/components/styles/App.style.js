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
    width: 100vw; /* VW: Viewport Width */
    height: 100vh; /* VH: Viewport Height */
    position: relative; /* Important for centeralize vertically & horizontally */
`;

export const LoginDivContainer = styled.div`
    position: absolute; /*Centerelize 1 (with position: relative; in the outer container)*/
    top: 50%; /*Centerelize 2 (with position: relative; in the outer container)*/
    left: 50%; /*Centerelize 3 (with position: relative; in the outer container)*/
    transform: translate(-50%, -50%); /*Centerelize 4 (with position: relative; in the outer container)*/
    width: 300px; 
    height: flex; 
    background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 200% 200%;
	animation: ${gradient} 15s ease infinite;
`;

export const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AppButton = styled.button`
    border-radius: 3px;
    border: 2px solid #fff;
    color: #fff;
    margin: 5px;
    padding: 5px;    
    width: 200px;
    height: 50px;
    background: linear-gradient(to right, #ccc, #ccc);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.5s 0s;

    &:hover{
      background-size: 100% 100%;
    } 
`;

export const LoginH1 = styled.h1`
    margin-top: 2rem;
    color: black;
    font-family: 'Raleway',sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 72px;
    text-align: center;
    text-transform: uppercase;
`;

export const LoginH2 = styled.h2`
    margin-top: 2rem;
    color: black;
    font-family: 'Raleway',sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 72px;
    text-align: center;
    text-transform: uppercase;
`;

export const LoginInput = styled.input`
    padding: 5px;
    margin: 5px;
    width: 200px;
    height: 50px;
    background: transparent;
    border-color: #fff;
    background: linear-gradient(to right, #ccc, #ccc);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size 0.5s 0s;
    color: black;
    font-family: 'Raleway',sans-serif;
    font-size: 1rem;
    font-weight: bold;
    ::placeholder {color: #fff;}

    &:focus{
        outline: none;
        background-size: 100% 100%;
    }
`;

export const DashboardButton = styled.button`

`;

export const DashboardDivContainer = styled.div`

`;

export const DashboardDiv = styled.div`

`;