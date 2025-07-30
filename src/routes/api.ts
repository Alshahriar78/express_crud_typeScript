import express from "express";
const router = express.Router();
import * as UserController from "../controller/userController";
import AuthMiddleware from "../middleware/authMiddleware";


router.post("/create-user",AuthMiddleware, UserController.userCreate);
router.get("/get-all-user",AuthMiddleware,UserController.getAllUser);
router.get("/user-find-by-id/:id",AuthMiddleware, UserController.findById);
router.patch("/user-update-by-id/:id",AuthMiddleware, UserController.updateById);
router.delete("/user-delete-by-id/:id",AuthMiddleware, UserController.deleteById)


export default router;
