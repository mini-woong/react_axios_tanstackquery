import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../lib/api/auth'

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: aliceblue;
    border-radius: 8px;
`
const InputGroup = styled.div`
    margin-bottom: 30px;

    label {
        display: block;
        margin-bottom: 10px;
        font-size: 25px;
        font-weight: 700;
    }

    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        //border: solid 10px;
    }
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: linear-gradient(70deg, rgb(97, 63, 137), rgb(127, 131, 186) 45%, rgb(184, 155, 203));
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 15px;

    &:disabled {
        background-color: black;
    }

`
const ToggleButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: grey;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`
export default function Login({ setUser }) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const { userId, nickname, avatar } = await login({
            id: id,
            password: password,
        });
        setUser({ userId, nickname, avatar });
        navigate("/");
    }
    return (
        <Container>
            <InputGroup>
                <label htmlFor='id'>아이디</label>
                <input type='text' onChange={(e) => {setId(e.target.value)}} placeholder='아이디' />
            </InputGroup>
            <InputGroup>
                <label htmlFor='password'>패스워드</label>
                <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='비밀번호' />
            </InputGroup>
            <Button onClick={handleLogin}>로그인</Button>
            <ToggleButton onClick={() => {
                navigate("/signup");
            }}>회원가입</ToggleButton>
        </Container>
    )
}
