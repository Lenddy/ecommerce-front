import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const StylesHeader = styled.header`
	background-color: #222;
`;

const Logo = styled(Link)`
	color: #fff;
	text-decoration: none;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const StyleNav = styled.nav`
	display: flex;
	gap: 20px;
`;

const NavLink = styled(Link)`
	color: #aaa;
	text-decoration: none;
`;

const Header = () => {
	const { cartProducts } = useContext(CartContext);
	return (
		<StylesHeader>
			<Center>
				<Wrapper>
					<Logo href={"/"}>Ecommerce</Logo>
					<StyleNav>
						<NavLink href={"/"}>Home</NavLink>
						<NavLink href={"/products"}> All Products </NavLink>
						<NavLink href={"/categories"}> Categories </NavLink>
						<NavLink href={"/account"}> account </NavLink>
						<NavLink href={"/cart"}>
							Cart ({cartProducts?.length})
						</NavLink>
					</StyleNav>
				</Wrapper>
			</Center>
		</StylesHeader>
	);
};

export default Header;
