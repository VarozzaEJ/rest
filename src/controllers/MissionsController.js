import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";



export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.getMissions)
            .post('', this.createMission)
            .put('/:missionId', this.completeMission)
    }

    async getMissions(request, response, next) {
        try {
            const missions = await missionsService.getMissions()
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async createMission(request, response, next) {
        try {
            const missionInfo = request.body
            const newMission = await missionsService.createMission(missionInfo)
            response.send(newMission)
        } catch (error) {
            next(error)
        }
    }

    async completeMission(request, response, next) {
        try {
            const missionId = request.params.missionId
            const missionUpdate = request.body
            const updatedMission = await missionsService.completeMission(missionId, missionUpdate)
            response.send(updatedMission)
        } catch (error) {
            next(error)
        }
    }
}