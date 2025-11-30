import database from "../lib/db.js";
import smash_moveset from "../models/smash_moveset.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const SmashMoveset = smash_moveset(db, DataTypes);

class SmashMovesetDAO {
    async createSmashMoveset(smashMoveset) {
        try {
            const registration = await SmashMoveset.create(smashMoveset);
            console.log("Smash Moveset registered: ", registration.id);

            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async getSmashMovesetByID(searchId) {
        try {
            const smashMovesetSearch = await SmashMoveset.findOne({
                where: {id: searchId}
            });

            return smashMovesetSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getSmashMovesets() {
        try {
            const smashMovesets = await SmashMoveset.findAll();
            return smashMovesets;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateSmashMoveset(smashMoveset) {
        try {
            await SmashMoveset.update(
                {
                    forward: smashMoveset.forward,
                    up: smashMoveset.up,
                    down: smashMoveset.down
                },
                { where: { id: smashMoveset.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteSmashMovesetById(smashMovesetId) {
        try {
            await SmashMoveset.destroy({
                where: { id: smashMovesetId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}