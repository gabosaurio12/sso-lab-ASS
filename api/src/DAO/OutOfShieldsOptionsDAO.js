import database from "../lib/db.js";
import out_of_shield_options from "../models/out_of_shield_options.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const OutOfShieldOptions = out_of_shield_options(db, DataTypes);

class OutOfShieldOptionsDAO {
    async createOutOfShieldOptions(outOfShieldOptions) {
        try {
            const registration = await OutOfShieldOptions.create(outOfShieldOptions);
            console.log("Out Of Shield Options registered: ", registration.id);

            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async getOutOfShieldOptionsByID(searchId) {
        try {
            const outOfShieldOptionsSearch = await OutOfShieldOptions.findOne({
                where: {id: searchId}
            });

            return outOfShieldOptionsSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getOutOfShieldOptionss() {
        try {
            const outOfShieldOptionss = await OutOfShieldOptions.findAll();
            return outOfShieldOptionss;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateOutOfShieldOptions(outOfShieldOptions) {
        try {
            await OutOfShieldOptions.update(
                {
                    attack: outOfShieldOptions.attack
                },
                { where: { id: outOfShieldOptions.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteOutOfShieldOptionsById(outOfShieldOptionsId) {
        try {
            await OutOfShieldOptions.destroy({
                where: { id: outOfShieldOptionsId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}