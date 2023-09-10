import {Router} from 'express';
import ProductManager from '../controllers/managers/mongo/productMongoManager.js';
const pm=new ProductManager()
const routerP=Router()

routerP.get("/", async (req, res) => {
  
    const lista=await pm.getProducts()
    res.json(lista)
  
  
  })

routerP.post("/", async (req, res) => {
    const product=req.body
    const newProduct=await pm.addProduct(product)
    res.json({newProduct})
  
  
  })

export default routerP