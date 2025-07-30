import jwt from 'jsonwebtoken';
import { JWT_EXPIRE_TIME, JWT_KEY } from '../config/jwtConfig';

export const TokenEncode=(email:string ,id:string)=>{

let KEY= JWT_KEY;
let EXPIRE={expiresIn:JWT_EXPIRE_TIME}
let PAYLOAD = { 
    email: email, 
    id: id
 };
return jwt.sign(PAYLOAD,KEY,EXPIRE)

}

export const TokenDecode=(token:any)=>{
   try {
      return jwt.verify(token,JWT_KEY);
   } catch (error) {
    return null;
   }

}