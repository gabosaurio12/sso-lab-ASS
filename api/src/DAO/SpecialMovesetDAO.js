import database from "../lib/db.js";
import special_moveset from "../models/special_moveset.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const SpecialMoveset = special_moveset(db, DataTypes);

class SpecialMovesetDAO {
    async createSpecialMoveset(specialMoveset) {
        try {
            const registration = await SpecialMoveset.create(specialMoveset);
            console.log("Special Moveset registered: ", registration.id);

            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async getSpecialMovesetByID(searchId) {
        try {
            const specialMovesetSearch = await SpecialMoveset.findOne({
                where: {id: searchId}
            });

            return specialMovesetSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getSpecialMovesets() {
        try {
            const specialMovesets = await SpecialMoveset.findAll();
            return specialMovesets;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateSpecialMoveset(specialMoveset) {
        try {
            await SpecialMoveset.update(
                {
                    neutral: specialMoveset.neutral,
                    side: specialMoveset.side,
                    up: specialMoveset.up,
                    down: specialMoveset.down
                },
                { where: { id: specialMoveset.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteSpecialMovesetById(specialMovesetId) {
        try {
            await SpecialMoveset.destroy({
                where: { id: specialMovesetId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}