import { JWT_KEY } from "../config/jwtConfig";
import { Request, Response, NextFunction } from 'express'
import {TokenDecode} from "../utilities/tokenUtilities"
export default ( req:Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    let decode = TokenDecode(token);
    if(decode=== null){
       return res.status(200).json({"Message":"Unauthorize"})
    }else{
       if (typeof decode !== "string") {
        req.headers.email = decode.email;
        req.headers.password = decode.password;
         }
        next()
    }
    
    
}