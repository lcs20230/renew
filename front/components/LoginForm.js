import React, {useCallback, useMemo, useState} from "react";
import {Button, Form, Input} from "antd";
import Link from "next/link";
import styled from "styled-components";
import userInput from "../hooks/userInput";
import {useDispatch} from "react-redux";
import {loginAction} from "../reducers/user"

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
	const dispatch = useDispatch();
	const [id, onChangeId] = userInput('');
	const [password, onChangePassword] = userInput('');

	const onSubmitForm = useCallback(() => {
		console.log(id, password);
		dispatch(loginAction({id, password}));
	}, [id, password]);

	return (
		<FormWrapper onFinish={onSubmitForm}>
			<div>
				<label htmlFor="user-id">아이디</label>
				<br/>
				<Input name="user-id" value={id} required onChange={onChangeId}/>
			</div>
			<div>
				<label htmlFor="user-password">패스워드</label>
				<br/>
				<Input name="user-password" value={password} type="password" required onChange={onChangePassword}/>
			</div>
			<ButtonWrapper>
				<Button htmlType="submit" type="primary" loading={false}>로그인</Button>
				<Link href="/signup"><a><Button>회원가입</Button></a></Link>
			</ButtonWrapper>
		</FormWrapper>
	);
}

export default LoginForm;
