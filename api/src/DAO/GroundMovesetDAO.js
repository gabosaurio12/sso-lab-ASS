import database from "../lib/db.js";
import ground_moveset from "../models/ground_moveset.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const GroundMoveset = ground_moveset(db, DataTypes);

class GroundMovesetDAO {
    async createGroundMoveset(groundMoveset) {
        try {
            const registration = await GroundMoveset.create(groundMoveset);
            console.log("Ground Moveset registered: ", registration.id);

            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async getGroundMovesetByID(searchId) {
        try {
            const groundMoveSetSearch = await GroundMoveset.findOne({
                where: {id: searchId}
            });

            return groundMoveSetSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getGroundMovesets() {
        try {
            const groundMovesets = await GroundMoveset.findAll();
            return groundMovesets;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateGroundMoveset(groundMoveset) {
        try {
            await GroundMoveset.update(
                {
                    jab: groundMoveset.jab,
                    forward_tilt: groundMoveset.forward_tilt,
                    up_tilt: groundMoveset.up_tilt,
                    down_tilt: groundMoveset.down_tilt
                },
                { where: { id: groundMoveset.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteGroundMovesetById(groundMovesetId) {
        try {
            await GroundMoveset.destroy({
                where: { id: groundMovesetId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}