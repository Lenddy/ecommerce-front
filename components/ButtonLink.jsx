import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ButtonStyles } from "./Button";

const StyledLink = styled(Link)`
	${ButtonStyles}
`;

const ButtonLink = (props) => {
	return <StyledLink {...props}></StyledLink>;
};

export default ButtonLink;
