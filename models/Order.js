import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
	{
		line_items: Object,
		name: String,
		email: String,
		city: String,
		postalCode: String,
		streeaddress: String,
		name: String,
	},
	{ timestamps: true }
);

export const Product = models.Product || model("Product", ProductsSchema);

// module.exports = Product;
