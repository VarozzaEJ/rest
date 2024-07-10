import { Schema } from "mongoose";


export const RatSchema = new Schema({
    name: { type: String, minLength: 1, maxLength: 100, required: true, default: 'Remy' },
    callsign: { type: String, minLength: 1, maxLength: 30, required: true, default: 'V' },
    picture: { type: String, minLength: 0, maxLength: 500, required: true, default: 'https://www.cartooncuisine.com/wp-content/uploads/2020/01/NickandFletcherPostScreenshot.jpg' },
}, { timestamps: true, toJSON: { virtuals: true } }) 
