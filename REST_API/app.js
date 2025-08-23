import express from 'express';
import userRouter from './routes/userroute.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users',userRouter);

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})
