import express,{Request,Response} from "express";

const app = express();

const PORT = 3000;

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello, Typescript with Express!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

