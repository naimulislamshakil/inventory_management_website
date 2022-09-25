const Brand = require('../Model/Brand');

module.exports.postBrandService = async (data) => {
	const result = await Brand.create(data);
	return result;
};

module.exports.getBrandsService = async () => {
	const result = await Brand.find({});
	return result;
};
module.exports.getBrandByIdService = async (id) => {
	const result = await Brand.findById(id);
	return result;
};
