import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #027536;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RegisterForm = styled.form`
    width: 350px;
    transition: all 0.3s;
    background-color: #fff;
    padding: 10px;
    box-shadow: -1px 1px 21px 4px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 1px 21px 4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 21px 4px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
`;

export const FormField = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    height: 45px;
    border: none;
    background-color: #ede8e8;
    margin: 15px 0;
`;
export const ValidText = styled.span`
    color: red;
`;
export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #027536;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;
`;
export const Indicator = styled.div`
    width: 100%;
    height: 45px;
    background-color: #027536;
    color: #fff;

    font-size: 22px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
