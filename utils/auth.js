import express from 'express';
import  jwt  from 'jsonwebtoken';

export const  AuthenticateToken = (req, res, next) => {
    try {
        const authtoken = req.headers['authorization']
        console.log("authtoken",authtoken);
        const bearerToken = authtoken.split(" ")[1];

        jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(user.name);
        req.userName = user.name; // Modifying req object so as to get name in next middleware
        next();
        });
        
        
    } catch (error) {
        console.log('error has occured', error);
        res.send('User is not authorized');        
    }
}