import express from "express";
import { productsRoutes } from "./routes/products.routes";
import { providersRoutes } from "./routes/providers.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('esta corriendo');
    
});

app.use('/users', usersRoutes.router);
app.use('/products', productsRoutes.router);
app.use('/providers', providersRoutes.router);
