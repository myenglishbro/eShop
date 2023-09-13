import {Router} from 'express';
import ProductManager from '../controllers/managers/mongo/productMongoManager.js';
const pm=new ProductManager()
const routerV=Router()

routerV.get("/", async (req, res) => {
  
    const listadeproductos=await pm.getProducts()
    res.render("index",{listadeproductos})
  
  
  })


  routerV.get("/chat", async (req, res) => {
    res.render("chat")  ;
  
  })




export default routerV