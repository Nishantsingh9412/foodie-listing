import mongoose from "mongoose";
import weblist from "../models/weblist.js";

export const setWebList = async (req, res) => {
    const {
        restroName,
        restroImage,
        deliveryFees,
        deliveryFeesCurrency,
        deliveryTime,
        deliveryType,
        restroLocation,
        restroRating,
        restroType,
        website,
        createdBy
    } = req.body;

    if (
        !restroName ||
        !restroImage ||
        !deliveryFees ||
        !deliveryFeesCurrency ||
        !deliveryTime ||
        !deliveryType||
        !restroLocation ||
        !restroType ||
        !website ||
        !restroRating
    ) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields"
        });
    }
    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: "userId not Valid"
        });
    }
    else {
        try {
            const newWebList = await weblist.create({
                restroName,
                restroImage,
                restroType,
                deliveryFees,
                deliveryFeesCurrency,
                deliveryTime,
                deliveryType,
                restroLocation,
                restroRating,
                website,
                createdBy
            });
            return res.status(201).json({
                success: true,
                result: newWebList,
                message: "Weblist created successfully"
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                err: err
            });
        }
    }
}

export const getWebList = async (req, res) => {
    try {
        const webList = await weblist
            .find()
            .populate('createdBy', '-password')
            .sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            result: webList,
            message: "Weblist fetched successfully"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            err: err
        });
    }
}

export const updateWebList = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid Weblist ID"
        });
    }
    const {
        restroName,
        restroImage,
        restroType,
        deliveryFees,
        deliveryFeesCurrency,
        deliveryTime,
        deliveryType,
        restroLocation,
        restroRating,
        website,
    } = req.body;
    if (
        !restroName ||
        !restroImage ||
        !restroType ||
        !deliveryFees ||
        !deliveryFeesCurrency ||
        !deliveryTime ||
        !deliveryType ||
        !restroType ||
        !restroLocation ||
        !website ||
        !restroRating
    ) {
        return res.status(400).json({ success: false, message: "Please fill all the fields" });
    } else {
        try {
            const updatedWebList = await weblist.findByIdAndUpdate({ _id }, {
                restroName,
                restroImage,
                restroType,
                deliveryFees,
                deliveryFeesCurrency,
                deliveryTime,
                deliveryType,
                restroLocation,
                website,
                restroRating,
            }, { new: true });
            return res.status(201).json({
                success: true,
                result: updatedWebList,
                message: "Weblist updated successfully"
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
                err: err
            });
        }
    }
}

export const getWebListCreatedBy = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const webList = await weblist
            .find({ createdBy: _id })
            .populate('createdBy', '-password')
            .sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            result: webList,
            message: "Weblist fetched successfully"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            err: err
        });
    }
}

export const deleteWebList = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid Weblist ID"
        });
    }
    try {
        const deletedWebList = await weblist.findByIdAndDelete(_id);
        if (!deletedWebList) {
            return res.status(404).json({
                success: false,
                message: "Weblist not found"
            });
        } else {
            return res.status(200).json({
                success: true,
                result: deletedWebList,
                message: "Weblist deleted successfully"
            });
        }
    } catch (err) {
        console.error("Error deleting weblist:", err); // Log the error details
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            err: err // Include the error message in the response
        });
    }
}