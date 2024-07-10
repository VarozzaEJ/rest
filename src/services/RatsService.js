import { dbContext } from "../db/DbContext.js"



class RatsService {
    async getRats() {
        const Rats = await dbContext.Rats.find()
        return Rats
    }
}

export const ratsService = new RatsService()