const express= require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/users.routes")
const todoRoutes = require("./routes/todos.routes")

initModels();


const app = express();
app.use(cors());
app.use(morgan());
app.use(express.json());


const PORT = 8000;

db.authenticate()
.then(()=>{
    console.log('base de datos conectada');
})
.catch((error)=> console.log(error));

db.sync({alter: true})
.then(()=>console.log(('base de datos sync')))
.catch((error)=> console.log(error));


app.use(userRoutes);
app.use(todoRoutes);

app.get("/", (req, res)=>{
    res.send("Welcome to my api")
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

