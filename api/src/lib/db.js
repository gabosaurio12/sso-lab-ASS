import "dotenv/config";
import pkg from 'sequelize';
const { Sequelize } = pkg;

const dburl = process.env.DB_URL;

class Database {
    constructor() {
        if (!Database.instance) {
            this.sequelize = new Sequelize(dburl, {
                logging: false
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    async openConnection() {
        try {
            await this.sequelize.authenticate();
            console.log("DB connected");
        } catch (error) {
            console.log("Connection error: ", error);
        }
    }

    getInstance() {
        return this.sequelize;
    }
}

const database = new Database();
export default database;