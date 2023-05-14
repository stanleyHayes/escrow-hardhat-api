import {model, Schema} from "mongoose";

const escrowSchema = new Schema({
    depositor: {
        type: String,
        required: true
    },
    arbiter: {
        type: String,
        required: true
    },
    beneficiary: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    }
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

const Escrow = model("Escrow", escrowSchema);

export default Escrow;