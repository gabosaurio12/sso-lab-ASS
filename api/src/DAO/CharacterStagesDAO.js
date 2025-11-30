import database from "../lib/db.js";
import characterStages from "../models/characterStages.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const CharacterStages = characterStages(db, DataTypes);

class CharacterStagesDAO {
    async createCharacterStages(characterStages) {
        try {
            const registration = await CharacterStages.create(characterStages);
            console.log("CharacterStages registered: ", registration.id);

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getCharacterStagesById(idSearch) {
        try {
            const characterStagesSearch = await CharacterStages.findOne({
                where: {id: idSearch}
            });

            return characterStagesSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getCharacterStages() {
        try {
            const characterStages = await CharacterStages.findAll();
            return characterStages;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateCharacterStagesById(updatedCharacterStages) {
        try {
            await CharacterStages.update(
                {
                    stage: updatedCharacterStages.stage,
                    state: updatedCharacterStages.state
                },
                { where: { id: updatedCharacterStages.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteCharacterStagesByID(deleteId) {
        try {
            await CharacterStages.destroy({
                where: { id: deleteId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default CharacterStagesDAO;