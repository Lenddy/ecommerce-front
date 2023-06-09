import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Table from "@/components/Table";
import Input from "@/components/Input";

const ColumnsWrappers = styled.div`
	display: grid;
	grid-template-columns: 1.2fr 0.8fr;
	gap: 40px;
	margin-top: 40px;
`;

const Box = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 30px;
`;

const ProductInfoCell = styled.td`
	padding: 10px 0;
`;

const ProductImageBox = styled.div`
	width: 100px;
	height: 100px;
	padding: 10px;
	box-shadow: 0 0 10px;
	// border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		max-width: 80px;
		max-height: 80px;
	}
`;

const QuantityLabel = styled.span`
	padding: 0px 3px;
`;

const CityHolder = styled.div`
	display: flex;
	gap: 5px;
`;

export default function CartPage() {
	const { cartProducts, addProduct, removeProduct, clearCart } =
		useContext(CartContext);
	const [products, setProducts] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [country, setCountry] = useState("");

	useEffect(() => {
		if (cartProducts?.length > 0) {
			axios
				.post("/api/cart", { ids: cartProducts })
				.then((res) => {
					setProducts(res.data);
				})
				.catch((err) => console.log("err", err));
		} else setProducts([]);
	}, [cartProducts]);

	useEffect(() => {
		if (window.location.href.includes("success")) {
			clearCart();
		}
	}, []);

	const moreOfThisProduct = (id) => {
		addProduct(id);
	};

	const lessOfThisProduct = (id) => {
		removeProduct(id);
	};

	let total = 0;

	const goToPayment = async () => {
		const res = await axios.post("/api/checkout", {
			name,
			email,
			city,
			postalCode,
			streetAddress,
			country,
			cartProducts,
		});
		if (res.data.url) {
			console.log((window.location = res.data.url));
			window.location = res.data.url;
		}
	};

	for (const productId of cartProducts) {
		const price = products.find((p) => p._id === productId)?.price || 0;
		total += price;
	}

	// useEffect(() => {
	// }, []);
	if (window.location.href.includes("success")) {
		return (
			<>
				<Header />
				<Center>
					<ColumnsWrappers>
						<Box>
							<h1>Thanks for your order!</h1>
							<p>
								We Will email you when your order will be sent.
							</p>
						</Box>
					</ColumnsWrappers>
				</Center>
			</>
		);
	}

	return (
		<>
			<Header />
			<Center>
				<ColumnsWrappers>
					<Box>
						<h2> cart </h2>
						{!cartProducts?.length && (
							<div> your cart is empty </div>
						)}
						{products?.length > 0 && (
							<Table>
								<thead>
									<tr>
										<th>product</th>
										<th>Quantity</th>
										<th>price</th>
									</tr>
								</thead>
								<tbody>
									{products.map((product) => (
										<tr>
											<ProductInfoCell>
												<ProductImageBox>
													<img
														src={product.images[0]}
													/>
												</ProductImageBox>
												{product?.name}
											</ProductInfoCell>
											<td>
												<Button
													onClick={() =>
														lessOfThisProduct(
															product._id
														)
													}
												>
													-
												</Button>
												<QuantityLabel>
													{
														cartProducts.filter(
															(id) =>
																id ===
																product._id
														).length
													}
												</QuantityLabel>
												<Button
													onClick={() =>
														moreOfThisProduct(
															product._id
														)
													}
												>
													+
												</Button>
											</td>
											<td>
												$
												{cartProducts.filter(
													(id) => id === product._id
												).length * product.price}
											</td>
										</tr>
									))}
									<tr>
										<td></td>
										<td></td>
										<td>${total}</td>
									</tr>
								</tbody>
							</Table>
						)}
					</Box>
					{!!cartProducts?.length && (
						<Box>
							<h2>Order Information</h2>
							<Input
								type="text"
								placeholder="Name"
								value={name}
								name="name"
								onChange={(e) => setName(e.target.value)}
							/>
							<Input
								type="text"
								placeholder="Email"
								value={email}
								name="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<CityHolder>
								<Input
									type="text"
									placeholder="City"
									value={city}
									name="city"
									onChange={(e) => setCity(e.target.value)}
								/>
								<Input
									type="text"
									placeholder="Postal code"
									value={postalCode}
									name="postalCode"
									onChange={(e) =>
										setPostalCode(e.target.value)
									}
								/>
							</CityHolder>
							<Input
								type="text"
								placeholder="Street Address"
								value={streetAddress}
								name="streetAddress"
								onChange={(e) =>
									setStreetAddress(e.target.value)
								}
							/>
							<Input
								type="text"
								placeholder="Country"
								value={country}
								name="country"
								onChange={(e) => setCountry(e.target.value)}
							/>
							<Button
								size={"l"}
								block
								black
								onClick={goToPayment}
							>
								Continue to payment
							</Button>
						</Box>
					)}
				</ColumnsWrappers>
			</Center>
		</>
	);
}
