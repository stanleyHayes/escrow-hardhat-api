import {Router} from "express";
import {approveEscrow, createEscrow, getEscrows} from "../controllers/escrows.js";

const router = Router({mergeParams: true});

router.route("/").get(getEscrows).post(createEscrow);
router.route("/:id").put(approveEscrow);

export default router;