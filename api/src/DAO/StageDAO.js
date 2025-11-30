import database from "../lib/db.js";
import stage from "../models/stage.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const Stage = stage(db, DataTypes);

class StageDAO {
    async createStage(stage) {
        try {
            const registration = await Stage.create(stage);
            console.log("Stage registered: ", registration.id);

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getStageByName(nameSearch) {
        try {
            const stageSearch = await Stage.findOne({
                where: {name: nameSearch}
            });

            return stageSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getStages() {
        try {
            const stages = await Stage.findAll();
            return stages;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateStageById(updatedStage) {
        try {
            await Stage.update(
                {
                    name: updatedStage.name
                },
                { where: { id: updatedStage.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteStageByID(deleteId) {
        try {
            await Stage.destroy({
                where: { id: deleteId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default StageDAO;