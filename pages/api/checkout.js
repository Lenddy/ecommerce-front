import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.json("should be a post ");
		return;
	}

	const { name, email, city, postalCode, streetAddress, country, products } =
		req.body;
	const productIds = products.split(",");
	const uniqueIds = [...new Set(productIds)];

	await mongooseConnect();
	const productsInfos = await Product.find({ _id: uniqueIds });

	let line_items = [];
	for (const producId of uniqueIds) {
		const productInfo = productsInfos.find(
			(p) => p._id.toString() === producId
		);
		const quantity = productIds.filter((id) => id === producId).length || 0;
		if (quantity > 0 && productInfo) {
			line_items.push({
				price_data: {
					currency: "USD",
					product_data: { name: productInfo.name }, //productInfo.fieldNameHere
					unit_amount: quantity * productInfo.price,
				},
			});
		}
	}
	res.json({ line_items });
}
