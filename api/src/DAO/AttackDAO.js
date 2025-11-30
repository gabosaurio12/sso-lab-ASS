import database from "../lib/db.js";
import attack from "../models/attack.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const Attack = attack(db, DataTypes);

class AttackDAO {
    async createAttack(attack) {
        try {
            const registration = await Attack.create(attack);
            console.log("Attack registered: ", registration.id);

            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }

    async getAttackByName(nameSearch) {
        try {
            const attackSearch = await Attack.findOne({
                where: {name: nameSearch}
            });

            return attackSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getAttacks() {
        try {
            const attacks = await Attack.findAll();
            return attacks;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateAttack(attackUpdated) {
        try {
            await Attack.update(
                {
                    name: attackUpdated.name,
                    description: attackUpdated.description,
                    button: attackUpdated.button,
                    frame_startup: attackUpdated.frame_startup,
                    end_lag: attackUpdated.end_lag,
                    on_shield: attackUpdated.on_shield
                },
                { where: { id: attackUpdated.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteAttackByID(attackId) {
        try {
            await Attack.destroy({
                where: { id: attackId }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}