import {Router} from 'express';

const router = Router();

const notesarray = [1,2,4,5];

router.get('/notes',(req,res)=>{
    // const arr = notesarray;
    // if(arr.size()<=0) res.json("Empty");
    res.status(200).json("OK");
})



export default router;