import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
	background-color: #222;
	color: #fff;
	padding: 50px 0px;
`;
const Title = styled.h1`
	margin: 0px;
	font-weight: normal;
	font-size: 3rem;
`;

const Desc = styled.p`
	color: #aaa;
	// font-size: 0.8rem;
`;

const ColWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.1fr 0.9fr;
	gap: 40px;
	img {
		max-width: 100%;
	}
`;

//this is for colloms in the feature  part
const Columns = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	img {
		max-width: 100%;
		border-radius: 20px;
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

const Featured = ({ product }) => {
	const { addProduct } = useContext(CartContext);
	const addFeaturedToCart = () => {
		addProduct(product?._id);
	};
	return (
		<Bg>
			<Center>
				<ColWrapper>
					<Columns>
						<div>
							<Title>{product?.name}</Title>
							<Desc>{product?.description}</Desc>
							<BtnWrapper>
								<ButtonLink
									href={`/products/${product?._id}`}
									white={1}
									outline={1}
									size="l"
								>
									Read More
								</ButtonLink>
								<Button
									white
									size="l"
									onClick={addFeaturedToCart}
								>
									{/* primary */}
									<CartIcon />
									Add to cart
								</Button>
							</BtnWrapper>
						</div>
					</Columns>
					<Columns>
						<img src={product?.images[0]} alt="MacBook" />
					</Columns>
				</ColWrapper>
			</Center>
		</Bg>
	);
};

export default Featured;
