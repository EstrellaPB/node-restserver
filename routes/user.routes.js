import { Router } from "express";
import { users } from "../controllers/users.js";

const router = Router();

router.get( '/', users.usersGet );

router.put( '/:id', users.usersPut );


router.post( '/', users.usersPost );

router.delete( '/', users.usersDelete );

export default router;