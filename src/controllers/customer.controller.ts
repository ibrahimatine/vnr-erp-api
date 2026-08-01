import { Request, Response } from "express";
import { pool } from "../config/database";


export async function getCustomers(
    req: Request,
    res: Response
){

    const { search = "", page = 1, limit = 10 } = req.query;

const offset = (Number(page) - 1) * Number(limit);

const result = await pool.query(
`
SELECT *
FROM customers
WHERE name ILIKE $1
OR phone LIKE $1
LIMIT $2 OFFSET $3
`,
[
 `%${search}%`,
 Number(limit),
 offset
]
);

    res.json(result.rows);
}


export async function createCustomer(
    req: Request,
    res: Response
){

    const {name, phone, email} = req.body;


    const result = await pool.query(
        `
        INSERT INTO customers(name, phone, email)
        VALUES($1,$2,$3)
        RETURNING *
        `,
        [name, phone, email]
    );


    res.status(201).json(result.rows[0]);
}