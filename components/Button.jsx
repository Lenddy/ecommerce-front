import React from "react";
import styled, { css } from "styled-components";
import { primary } from "@/lib/color";

export const ButtonStyles = css`
	border: 0;
	padding: 5px 15px;
	border-radius: 25px;
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	align-items: center;
	display: flex;
	// font-family: "Poppins",sans-serif
	font-weight: 700;
	svg {
		height: 15px;
		margin-right: 5px;
	}
	text-decoration: none;

	${(props) =>
		props.block &&
		css`
			display: block;
			width: 100%;
		`}

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
		props.black &&
		!props.outline &&
		css`
			background-color: #000;
			color: #fff;
		`}

	${(props) =>
		props.black &&
		props.outline &&
		css`
			background-color: transparent;
			color: #000;
			border: 1px solid #000;
		`}


	${(props) =>
		props.primary &&
		!props.outline &&
		css`
			background-color: ${primary};
			border: 1px solid ${primary};
			color: #fff;
		`}

	${(props) =>
		props.primary &&
		props.outline &&
		css`
			background-color: transparent;
			border: 1px solid ${primary};
			color: ${primary};
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
