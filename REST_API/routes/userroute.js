import {Router } from 'express';

const router = Router();

let users = [
    {
        id:1,
        name:"Ujjawal"
    },
    {
        id:2,
        name:"Patidar"
    }
]

router.get('/',(req,res)=>{
    res.status(200).json(users);
})

router.get('/:id',(req,res)=>{
    const user = users.find(u=>u.id == req.params.id);
    user ? res.json(user) : res.status(404).send("User not found!!");   
})

router.post('/',(req,res)=>{
    const newuser = {id:users.length+1 , name:req.body.name};
    users.push(newuser);
    res.status(201).json(newuser);
})

router.put('/:id',(req,res)=>{
    const user = users.find(u=>u.id == req.params.id);
    if(user){
        user.name = req.body.name;
        res.json(user);
    }
    else{
        res.status(404).send("User not found");
    }
})

router.delete('/:id',(req,res)=>{
    users = users.filter(u => u.id != req.params.id);
    res.sendStatus(204);
})

export default router;