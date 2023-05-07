import React from "react";
import styled from "styled-components";
import Center from "./Center";

const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr; //repeat(4, 1fr)
`;

const NewProducts = ({ product }) => {
	return (
		<Center>
			<ProductsGrid>
				{product?.length > 0 &&
					product.map((product) => <div>{product.name}</div>)}
			</ProductsGrid>
		</Center>
	);
};

export default NewProducts;
