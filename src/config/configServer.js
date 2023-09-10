// Importar la biblioteca dotenv
import dotenv from "dotenv";
// Cargo estas variables para que esten disponibles 
//la biblioteca dotenv buscará un archivo llamado .env en el directorio raíz de tu proyecto y analizará su contenido. 
dotenv.config();

import mongoose from "mongoose";

// Definir una función asincrónica llamada connectToBase
const connectToBase = async () => {
    try {
      // Intentar conectar a la base de datos MongoDB utilizando la URI de conexión desde las variables de entorno
      await mongoose.connect(process.env.URI);
      // Si la conexión tiene éxito, mostrar un mensaje de éxito
      console.log("Connected to MongoDB");
    } catch (error) {
      // Si hay un error en la conexión, mostrar un mensaje de error
      console.error(error);
    }
  };
  
  // Exportar la función connectToBase para que pueda ser utilizada en otros módulos
  export default connectToBase;