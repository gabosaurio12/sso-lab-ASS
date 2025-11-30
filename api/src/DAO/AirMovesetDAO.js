import database from "../lib/db.js";
import air_moveset from "../models/air_moveset.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const AirMoveset = air_moveset(db, DataTypes);

class AirMovesetDAO {
    async createAirMoveset(airMoveset) {
        try {
            const registration = await AirMoveset.create(airMoveset);
            console.log("Air Moveset registered: ", registration.id);

            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async getAirMovesetByID(searchId) {
        try {
            const airMovesetSearch = await AirMoveset.findOne({
                where: {id: searchId}
            });

            return airMovesetSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getAirMovesets() {
        try {
            const airMovesets = await AirMoveset.findAll();
            return airMovesets;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateAirMoveset(airMoveset) {
        try {
            await AirMoveset.update(
                {
                    neutral: airMoveset.neutral,
                    forward: airMoveset.forward,
                    back: airMoveset.back,
                    up: airMoveset.up,
                    down: airMoveset.down
                },
                { where: { id: airMoveset.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteAirMovesetById(airMovesetId) {
        try {
            await AirMoveset.destroy({
                where: { id: airMovesetId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}