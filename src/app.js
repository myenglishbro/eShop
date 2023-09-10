import connectToBase from "./config/configServer.js";
import express from "express";
import routerV from "./routes/view.router.js";



const app = express();
const PORT=process.env.PORT||8080

app.use("/",routerV)

app.listen(PORT, () => {
  try {
      console.log(`Listening to the port ${PORT}\nAcceder a:`);
      console.log(`\t1). http://localhost:${PORT}/api/products`)
      console.log(`\t2). http://localhost:${PORT}/api/carts`);
  }
  catch (err) {
      console.log(err);
  }
});

connectToBase()