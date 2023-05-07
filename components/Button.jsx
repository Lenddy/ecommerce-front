import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
	border: 0;
	padding: 5px 15px;
	border-radius: 25px;
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	align-items: center;
	svg {
		height: 15px;
		margin-right: 5px;
	}
	text-decoration: none;

	${(props) =>
		props.white &&
		!props.outline &&
		css`
			background-color: #fff;
			color: #000;
		`}

	${(props) =>
		props.white &&
		props.outline &&
		css`
			background-color: transparent;
			color: #fff;
			border: 1px solid #fff;
		`}

	${(props) =>
		props.primary &&
		css`
			background-color: #5542f6;
			border: 1px solid #5542f6;
			color: #fff;
		`}

	${(props) =>
		props.size === "l" &&
		css`
			font-size: 1.2rem;
			padding: 10px 20px;
			svg {
				height: 25px;
			}
		`}
`;

const StyledButton = styled.button`
	${ButtonStyles}
`;

const Button = ({ children, ...RemainingProps }) => {
	return <StyledButton {...RemainingProps}>{children}</StyledButton>;
};

export default Button;
