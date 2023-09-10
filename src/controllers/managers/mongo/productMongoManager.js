import productModel from "../../models/productModel.js";

export default class ProductManager {

    getProducts = async () => {
        try {
             return await productModel.find().lean()

        } catch (err) {
            return err
        }
    }
    addProduct = async (product) => {
        try {
    await productModel.create(product);
    return await productModel.findOne({ code: product.code })

        } 
        catch (err) {
    console.log(err)
        }
    };
}
