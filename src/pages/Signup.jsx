import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { register } from '../lib/api/auth'

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: aliceblue;
    border-radius: 8px;
`
const InputGroup = styled.div`
    margin-bottom: 15px;

    label {
        display: block;
        margin-bottom: 10px;
        font-size: 20px;
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
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;

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

export default function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (id.length <4 || id.length >10) {
            alert("아이디는 4글자에서 10글자 이내로만 가능합니다.");
            return ;
        }
        if (password.length <4 || password.length >15) {
            alert("아이디는 4글자에서 15글자 이내로만 가능합니다.");
            return ;
        }
        if (nickname.length <1 || nickname.length >10) {
            alert("아이디는 1글자에서 10글자 이내로만 가능합니다.");
            return ;
        }

        const response = await register({
            id: id,
            password: password,
            nickname: nickname,
        });
        if (response) {
            confirm("회원가입 완료!")
            navigate("/login")
        }
    };
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
            <InputGroup>
                <label htmlFor='nickname'>닉네임</label>
                <input type='text' onChange={(e) => {setNickname(e.target.value)}} placeholder='닉네임' />
            </InputGroup>
            <Button onClick={handleRegister}>회원가입</Button>
            <ToggleButton onClick={() => {
                navigate("/login");
            }}>돌아가기</ToggleButton>
        </Container>
    )
}
