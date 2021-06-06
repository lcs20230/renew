import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Form, Input} from "antd";

const Signup = () => {
	on
	return (
		<AppLayout>
			<Head>
				<title>회원가입</title>
			</Head>
			<Form onFinish={onSubmit}>
				<div>
					<label htmlFor="user-id">아이디</label>
					<br />
					<Input name="user-id" value={id} onChange={onChangeId} required />
				</div>
				<div>

				</div>

			</Form>
		</AppLayout>
	)
};

export default Signup;
