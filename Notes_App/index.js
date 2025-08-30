import express from "express"
import notesRouter from './routes/NotesRouter.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api",notesRouter);

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})
