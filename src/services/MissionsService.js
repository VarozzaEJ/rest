import { dbContext } from "../db/DbContext.js"


class MissionsService {
    async getMissions() {
        const missions = await dbContext.Missions.find().populate('location rat', '-name -picture')
        return missions
    }
    async createMission(missionInfo) {
        const newMission = await dbContext.Missions.create(missionInfo)
        await newMission.populate('location rat', '-name -picture')
        return newMission
    }
    async getSpecificMissions(ratId) {
        const specificMissions = await dbContext.Missions.find({ ratId: ratId }).populate('location rat', '-name -picture')
        return specificMissions
    }
    async getGroupedMissions(locationId) {
        const groupedMissions = await dbContext.Missions.find({ locationId: locationId }).populate('location rat', '-name -picture')
        return groupedMissions
    }
    async completeMission(missionId, missionUpdate) {
        const uncompletedMission = await dbContext.Missions.findById(missionId)
        if (!uncompletedMission) throw new Error(`Couldn't Update the Mission because no mission exists with the id ${missionId}`)
        uncompletedMission.completed = missionUpdate.completed || uncompletedMission.completed
        await uncompletedMission.save()
        return uncompletedMission
    }
}

export const missionsService = new MissionsService()