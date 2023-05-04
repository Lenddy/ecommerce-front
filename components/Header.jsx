import Link from "next/link";
import styled from "styled-components";

const StylesHeader = styled.header`
	background-color: #222;
`;

const Header = () => {
	return (
		<StylesHeader>
			<Link href={"/"}>Ecommerce</Link>
			<nav>
				<Link href={"/"}>Home</Link>
				<Link href={"/products"}> All Products </Link>
				<Link href={"/categories"}> Categories </Link>
				<Link href={"/account"}> account </Link>
				<Link href={"/cart"}> Cart (0) </Link>
			</nav>
		</StylesHeader>
	);
};

export default Header;
