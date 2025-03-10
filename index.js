const { error } = require('console');
const express = require('express');
const app = express() ;
const port = 4000 ;

app.use(express.json());

app.get('/', (req,res) => {
    res.send("server is running");
});

app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}`);
});

app.post('/signup', (req,res) => {
    const { username, email, password,} = req.body;

    if (!username){
        return res.status(400).json({ error: "Username cannot be empty"}) ; 
    }

    if (!email){
        return res.status(400).json({ error: "Email cannot be empty"}) ;
    }

    if (!password){
        return res.status(400).json({ error: "Password cannot be empty"}) ;
    }

    if (password.length > 8 && password.length <= 16){
        return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16 "});
    }

    

    res.status(201).json({
        message: "User registered successfully",
        user: {
            username,
            email,
            
        }
    });
});


