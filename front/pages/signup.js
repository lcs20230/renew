import React, {useCallback, useState} from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Button, Checkbox, Form, Input} from "antd";
import userInput from "../hooks/userInput";
import styled from "styled-components";


const ErrorMessage = styled.div`
	color: red;
`;

const Signup = () => {
	const [id, onChangeId] = userInput('');
	const [password, onChangePassword] = userInput('');
	const [nickname, onChangeNickname] = userInput('');

	const [passwordCheck, setPasswordCheck] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const onChangePasswordCheck = useCallback((e) => {
		setPasswordCheck(e.target.value);
		setPasswordError(e.target.value !== password);
	},[password]);
	const [term, setTerm] = useState('');
	const [termError, setTermError] = useState(false);
	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked);
		setTermError(false);
	},[]);

	const onSubmit = useCallback(() => {
		if(password !== passwordCheck) {
			return setPasswordError(true);
		}
		if(!term) {
			return setTermError(true);
		}
		console.log(id,nickname,password);
	},[password,passwordCheck,term]);

	return (
		<AppLayout>
			<Head>
				<title>회원가입</title>
			</Head>
			<Form onFinish={onSubmit}>
				<div>
					<label htmlFor="user-id">아이디</label>
					<br/>
					<Input name="user-id" value={id} onChange={onChangeId} required/>
				</div>
				<div>
					<label htmlFor="nickname">닉네임</label>
					<br/>
					<Input name="nickname" value={nickname} onChange={onChangeNickname} required/>
				</div>
				<div>
					<label htmlFor="user-password">비밀번호</label>
					<br/>
					<Input name="use-password" value={password} onChange={onChangePassword} required type="password"/>
				</div>
				<div>
					<label htmlFor="user-passwordCheck">비밀번호 체크</label>
					<br/>
					<Input name="user-passwordCheck" value={passwordCheck} onChange={onChangePasswordCheck} required type="password" />
					{passwordError && <ErrorMessage>비밀번호가 일치하지 않습</ErrorMessage>}
				</div>
				<div>
					<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
					{termError && <ErrorMessage>약관동의를 하셔야합니다.</ErrorMessage>}
				</div>
				<div style={{marginTop: 10}}>
					<Button type="primary" htmlType="submit">가입하기</Button>
				</div>
			</Form>
		</AppLayout>
	)
};

export default Signup;
