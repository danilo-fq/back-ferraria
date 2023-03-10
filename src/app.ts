import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import routers from './routers';

const app = express();

app.use(express.json());

app.use('/products', routers.productRouters);
app.use('/users', routers.userRouters);
app.use('/orders', routers.orderRouters);

app.use(errorMiddleware);

export default app;
