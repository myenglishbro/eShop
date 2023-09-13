import connectToBase from "./config/configServer.js";
import express from "express";
import exphbs from "express-handlebars"
import routerP from "./routes/product.router.js";
import __dirname from "./utils.js";
import routerV from "./routes/view.router.js";
import { Server, Socket } from "socket.io";
import socketChatServer from "./listeners/socketChatServer.js";

const app = express();
const PORT=process.env.PORT||8080

app.use(express.static(__dirname+"/public"))

app.engine("handlebars",exphbs.engine())
app.set("view engine","handlebars")
app.set("views",__dirname+"/views")


app.use("/api/products",routerP)
app.use("/",routerV)

const httpServer=app.listen(PORT, () => {
  try {
      console.log(`Listening to the port ${PORT}\nAcceder a:`);
      console.log(`\t1). http://localhost:${PORT}/api/products`)
      console.log(`\t2). http://localhost:${PORT}/api/carts`);
  }
  catch (err) {
      console.log(err);
  }
});


const socketServer = new Server(httpServer);

socketChatServer (socketServer)


connectToBase()