import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({ featureProduct, newProduct }) {
	console.log(newProduct);
	return (
		<div>
			<Header />
			<Featured product={featureProduct} />
			<NewProducts product={newProduct} />
		</div>
	);
}

export async function getServerSideProps() {
	const featuredProductId = "64504e0be809ed2a0cc23cc8";
	await mongooseConnect();
	const featureProduct = await Product.findById(featuredProductId); //.lean()
	const newProduct = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 10,
	}); //.sort({ createdAt: -1 }).limit(4)

	return {
		props: {
			featureProduct: JSON.parse(JSON.stringify(featureProduct)),
			newProduct: JSON.parse(JSON.stringify(newProduct)),
		},
	};
}
