import { Router } from "express";
import { methodHTTP as CrudController } from "../controller/crud.controller.js";


const router = Router();

router.get("/", CrudController.crud);
router.post("/", CrudController.addCruds);

export default router; 