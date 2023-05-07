import React from "react";
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr); //repeat(4, 1fr)
	gap: 40px;
	padding-top: 40px;
`;

const NewProducts = ({ product }) => {
	return (
		<Center>
			<ProductsGrid>
				{product?.length > 0 &&
					product.map((product) => <ProductBox {...product} />)}
			</ProductsGrid>
		</Center>
	);
};

export default NewProducts;
