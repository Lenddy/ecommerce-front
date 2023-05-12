import React from "react";
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr); //repeat(4, 1fr)
	gap: 40px;
	// padding-top: 40px;
`;

const Title = styled.h2`
	font-size: 2rem;
	margin: 30px 0px 20px;
	// font-weight: 500;
`;

const NewProducts = ({ product }) => {
	return (
		<Center>
			<Title>New Arrivals </Title>
			<ProductsGrid>
				{product?.length > 0 &&
					product.map((product) => <ProductBox {...product} />)}
			</ProductsGrid>
		</Center>
	);
};

export default NewProducts;
