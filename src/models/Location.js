import { Schema } from "mongoose";


export const LocationSchema = new Schema({
    country: { type: String, required: true, minLength: 3, maxLength: 200 },
    area: { type: String, required: true, minLength: 3, maxLength: 200 },
    labels: [{ type: String, maxLength: 25 }]
}, { timestamps: true, toJSON: { virtuals: true } })