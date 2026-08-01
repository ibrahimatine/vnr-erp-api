import {Request, Response} from "express";
import {pool} from "../config/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function login(
    req:Request,
    res:Response
){

    const {email,password}=req.body;


    const result = await pool.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
    );


    if(result.rows.length === 0){
        return res.status(401).json({
            message:"Identifiants invalides"
        });
    }


    const user=result.rows[0];


    const passwordValid =
        await bcrypt.compare(
            password,
            user.password
        );


    if(!passwordValid){
        return res.status(401).json({
            message:"Identifiants invalides"
        });
    }


    const token = jwt.sign(
        {
            id:user.id,
            email:user.email
        },
        process.env.JWT_SECRET!,
        {
            expiresIn:"1h"
        }
    );


    res.json({
        token
    });
}