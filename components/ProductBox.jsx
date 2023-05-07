import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProductWrapper = styled.div``;

const WhiteBox = styled.div`
	background-color: #fff;
	padding: 20px;
	height: 120px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	img {
		max-width: 100%;
		max-height: 80px;
	}
`;

const Name = styled.h2`
	font-weight: normal;
	font-size: 1.2rem;
	margin: 0;
`;

const ProductBox = ({ _id, name, description, price, images }) => {
	return (
		<ProductWrapper>
			<WhiteBox>
				<div>
					<img src={images[0]} alt={name} />
				</div>
			</WhiteBox>
			<Name>{name}</Name>
			<Button primary>Add to cart</Button>
		</ProductWrapper>
	);
};

export default ProductBox;
