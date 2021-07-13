import React, {useMemo, useState} from "react";
import PropType from "prop-types";
import Link from "next/link";
import {Input, Menu, Row, Col} from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import {useSelector} from "react-redux";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({children}) => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link href="/"><a>노드</a></Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/profile"><a>프로필</a></Link>
				</Menu.Item>
				<Menu.Item>
					<SearchInput enterButton/>
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup"><a>회원가입</a></Link>
				</Menu.Item>
			</Menu>
			<Row gutter={8}>
				<Col max={24} md={6}>
					{isLoggedIn ? <UserProfile /> :
						<LoginForm />}
				</Col>
				<Col max={24} md={12}>
					{children}
				</Col>
				<Col max={24} md={6}>
					<a href="hhhh" target="_blank" rel="noreferrer noopener">제로</a>
				</Col>
			</Row>
		</div>
	);
}
AppLayout.propTypes = {
	children: PropType.node.isRequired,
}

export default AppLayout;
