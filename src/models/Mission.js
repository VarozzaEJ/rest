import { Schema } from "mongoose"


export const MissionSchema = new Schema({
    codename: { type: String, minLength: 1, maxLength: 30, required: true },
    objective: { type: String, minLength: 1, maxLength: 300, required: true },
    year: { type: String, minLength: 1, maxLength: 25, required: true },
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
    ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
    completed: { type: Boolean, default: false },

}, { timestamps: true, toJSON: { virtuals: true } })

MissionSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true,
})

MissionSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})