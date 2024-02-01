import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#121212, #212b46);

    .title{
        font-size: 85px;
        color: #fff;
        animation: flipTitle 2s;
    }

    @keyframes flipTitle {
        from{
            transform: rotateX(90deg);
        }
        to{
            transform: rotateY(0deg);
        }    
    }

    .containerInput{
        background-color: rgba(255, 255, 255, 0.2);
        padding: 15px;
        margin: 34px 0;
        display: flex;
        border-radius: 8px;
        box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    }

    .containerInput input{
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: #fff;
        outline: none;
        margin-right: 8px;
    }

    .containerInput input::placeholder{
        color: #f1f1f1;
    }

    .buttonSearch{
        background-color: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.5s;
    }

    .buttonSearch:hover{
        transform: scale(1.2);
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    width: 500px;
    border-radius: 8px;

    h2{
        margin: 16px 0;
        font-size: 39px;
    }

    span{
        margin-bottom: 16px;
        font-weight: bold;
    }
`;