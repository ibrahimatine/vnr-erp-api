import { Request, Response } from "express";
import { pool } from "../config/database";
import { customerSchema } from "../validators/customer.validator";

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


export async function createCustomer(req: Request, res: Response){

    const validation = customerSchema.safeParse(req.body);

    if(!validation.success){
        return res.status(400).json({
            error: validation.error
        });
    }


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

export async function getCustomerById(
    req: Request,
    res: Response
){

    const { id } = req.params;

    const result = await pool.query(
        "SELECT * FROM customers WHERE id=$1",
        [id]
    );

    if(result.rows.length === 0){
        return res.status(404).json({
            message:"Client introuvable"
        });
    }

    res.json(result.rows[0]);
}

export async function updateCustomer(
    req: Request,
    res: Response
){

    const { id } = req.params;
    const { name, phone, email } = req.body;


    const result = await pool.query(
        `
        UPDATE customers
        SET name=$1, phone=$2, email=$3, updated_at=CURRENT_TIMESTAMP
        WHERE id=$4
        RETURNING *
        `,
        [
            name,
            phone,
            email,
            id
        ]
    );


    if(result.rows.length === 0){
        return res.status(404).json({
            message:"Client introuvable"
        });
    }


    res.json(result.rows[0]);
}

export async function deleteCustomer(
    req: Request,
    res: Response
){

    const { id } = req.params;


    const result = await pool.query(
        `
        DELETE FROM customers
        WHERE id=$1
        RETURNING *
        `,
        [id]
    );


    if(result.rows.length === 0){
        return res.status(404).json({
            message:"Client introuvable"
        });
    }


    res.json({
        message:"Client supprimé"
    });
}