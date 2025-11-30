import database from "../lib/db.js";
import character from "../models/character.js";
import { DataTypes } from "sequelize";
import smash_moveset from "../models/smash_moveset.js";

const db = database.getInstance();
const Character = character(db, DataTypes);

class CharacterDAO {
    async createCharacter(character) {
        try {
            const registration = await Character.create(character);
            console.log("Character registered: ", registration.id);

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getCharacterByName(nameSearch) {
        try {
            const characterSearch = await Character.findOne({
                where: {username: nameSearch}
            });

            return characterSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getCharacters() {
        try {
            const characters = await Character.findAll({ raw: true});
            return characters;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateCharacterById(updatedCharacter) {
        try {
            await Character.update(
                {
                    name: updatedCharacter.name,
                    weight: updatedCharacter.weight,
                    out_of_shields: updatedCharacter.out_of_shields,
                    ground_moveset_id: updatedCharacter.ground_moveset_id,
                    air_moveset_id: updatedCharacter.air_moveset_id,
                    special_moveset_id: updatedCharacter.special_moveset_id,
                    smash_moveset_id: updatedCharacter.smash_moveset_id,
                    stages: updatedCharacter.stages
                },
                { where: { id: updatedCharacter.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteCharacterByUsername(deleteUsername) {
        try {
            await Character.destroy({
                where: { username: deleteUsername }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default CharacterDAO;