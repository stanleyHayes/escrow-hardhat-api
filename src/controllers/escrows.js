import httpStatus from "http-statuses";
import Escrow from "../models/escrow.js";
const getEscrows = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 50;
        const skip = (page - 1) * size;
        const escrows = await Escrow.find()
            .sort({created_at: -1})
            .limit(size)
            .skip(skip);
        const totalEscrows = await Escrow.find().countDocuments();
        res.status(httpStatus.OK).json({message: `${totalEscrows} escrows retrieved`, data: escrows});
    }catch (e) {
        res.status(httpStatus.BAD_REQUEST).json({message: e.message});
    }
}

const approveEscrow = async (req, res) => {
    try {
        const {id} = req.params;
        const escrow = await Escrow.findById(id);
        if(!escrow) return res.status(httpStatus.NOT_FOUND).json({message: "Contract not found"});
        escrow.approved = true;
        await escrow.save();
        res.status(httpStatus.OK).json({message: "Transaction Approved", data: escrow});
    }catch (e) {
        res.status(httpStatus.BAD_REQUEST).json({message: e.message});
    }
}

const createEscrow = async (req, res) => {
    try {
        const {value, address, arbiter, depositor, beneficiary} = req.body;
        const escrow = await Escrow.create({value, address, arbiter, depositor, beneficiary});
        res.status(httpStatus.CREATED).json({message: 'Escrow created successfully', data: escrow});
    }catch (e) {
        res.status(httpStatus.BAD_REQUEST).json({message: e.message});
    }
}

export {getEscrows, approveEscrow, createEscrow};