import express from 'express';
import  jwt  from 'jsonwebtoken';


export const loginController =  (req, res) => {   
//  Authenticate user
try {
    const username = req.body.username;
    const user = {
        name : username
    }
   const singedJwtToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' });
   res.send({
    "accesstoken" : singedJwtToken
   }).status(200);
 
} catch (error) {
    res.send({
       message : "Error has occured"
    }).status(500);
}
}

