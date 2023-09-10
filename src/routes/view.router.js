import express from 'express';

const routerV= express.Router();

routerV.get('/',()=>{
 console.log("ruta desde router")
})

export default routerV