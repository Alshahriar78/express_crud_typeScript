import { Request, Response, NextFunction } from 'express'
import { getConnection, config } from "../config/db";
import { TokenEncode } from "../utilities/tokenUtilities"



//Login user and get a token
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email, password } = req.body;
        const pool: any | undefined = await getConnection();
        const data = await pool.request()
            .input("email", email)
            .input("password", password)
            .query("SELECT * FROM [vas_robi].[dbo].[Users] WHERE email =@email");
        if (data.recordset.length <= 0) {
            return res.status(200).json({ status: "Failed ", "Message": "User not Found" })
        }
        let token = TokenEncode(data['email'], data['password'])

        return res.status(200).json({ status: "success", "Message": "Login", Token: token })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ status: "error", "Message": "Internal Server error", error })
    }
}


// Create new user
export const userCreate = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    try {
        const pool: any | undefined = await getConnection();
        console.log("db conneced.............")

        let data = await pool.request()
            .input("name", name)
            .input("email", email)
            .input("password", password)
            .query("INSERT INTO [vas_robi].[dbo].[Users] (name, email,password) VALUES (@name, @email,@password)");
        res.status(201).json({
            status: "success",
            message: "User Create successfully",
            data: data.recordset
        })
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send("An unexpected error occurred");
        }
    }

}

//Get all user
export const getAllUser = async (req: Request, res: Response, next: NextFunction) => {

    const pool: any | undefined = await getConnection();
    const results = await pool.request().
        query("SELECT TOP (1000) [id],[name],[email] FROM [vas_robi].[dbo].[Users]");
    return res.status(200).json({
        status: "success",
        message: "ALL User Get successfully",
        data: results.recordset,
    });
}

//Get User By Id
export const findById = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const pool: any | undefined = await getConnection();
    const findById = await pool.request()
        .input("id", id)
        .query("SELECT  [name],[email]FROM [vas_robi].[dbo].[Users] WHERE id =@id;");
    return res.status(200).json({
        status: "success",
        message: `User Get successfully by ${id} `,
        data: findById.recordset,
    });
}

// Update By Id
export const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        const pool: any | undefined = await getConnection();
        const data = await pool.request()
            .input("id", id)
            .input("name", name)
            .input("email", email)
            .query("UPDATE [vas_robi].[dbo].[Users] SET [name] = @name, [email]= @email WHERE [id] = @id;");
        return res.status(200).json({
            status: "success",
            message: `User Update successfully by ${id} `,
            data: data.recordset,
        });
    } catch (error) {
        console.error(error)
    }
}

// delete by id
export const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const pool: any | undefined = await getConnection();
    const data = await pool.request().input("id", id).query("DELETE FROM [vas_robi].[dbo].[Users] WHERE id =@id;")
    return res.status(200).json({
        status: "success",
        message: `User Deleted successfully by ${id} `,
        data: data.recordset,
    });

}
