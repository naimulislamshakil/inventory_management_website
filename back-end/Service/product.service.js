const Product = require('../Model/product');

module.exports.postProductService = async (data) => {
	const result = await Product.create(data);
	return result;
};

module.exports.getProductsService = async (query) => {
	const { fields, skip, limit, sort } = query;

	const result = await Product.find({})
		.select(fields)
		.skip(skip)
		.limit(limit)
		.sort(sort);
	const count = await Product.find({}).count();
	const pageCount = Math.ceil(count / limit);
	return { result, pageCount };
};
