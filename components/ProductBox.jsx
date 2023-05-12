import { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
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

const Name = styled(Link)`
	font-weight: normal;
	font-size: 1.2rem;
	margin: 0;
	color: inherit;
	text-decoration: none;
`;

const ProductInfoBox = styled.div`
	margin-top: 5px;
`;

const PriceRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2px;
`;

const Price = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
`;

const ProductBox = ({ _id, name, description, price, images }) => {
	const { addProduct } = useContext(CartContext);
	const url = "/product/" + _id;
	return (
		<ProductWrapper>
			<WhiteBox href={url}>
				<div>
					<img src={images[0]} alt={name} />
				</div>
			</WhiteBox>
			<ProductInfoBox>
				<Name href={url}>{name}</Name>
				<PriceRow>
					<Price>${price}</Price>
					<Button onClick={() => addProduct(_id)} primary  outline>
						Add to cart
					</Button>
				</PriceRow>
			</ProductInfoBox>
		</ProductWrapper>
	);
};

export default ProductBox;
