import database from "../lib/db.js";
import player from "../models/player.js";
import { DataTypes } from "sequelize";

const db = database.getInstance();
const Player = player(db, DataTypes);

class PlayerDAO {
    async createPlayer(player) {
        try {
            const registration = await Player.create(player);
            console.log("Player registered: ", registration.id);

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getPlayerByUsername(usernameSearch) {
        try {
            const playerSearch = await Player.findOne({
                where: {username: usernameSearch}
            });

            return playerSearch;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getPlayers() {
        try {
            const players = await Player.findAll();
            return players;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updatePlayerById(updatedPlayer) {
        try {
            await Player.update(
                {
                    username: updatedPlayer.username,
                    password: updatedPlayer.password,
                    main_id: updatedPlayer.main_id,
                    secondary_id: updatedPlayer.secondary_id
                },
                { where: { id: updatedPlayer.id } }
            );
            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deletePlayerByUsername(deleteUsername) {
        try {
            await Player.destroy({
                where: { username: deleteUsername }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default PlayerDAO;