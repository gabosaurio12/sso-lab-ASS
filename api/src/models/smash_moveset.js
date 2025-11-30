import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('smash_moveset', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    forward: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    },
    down: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    },
    up: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'smash_moveset',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "smash_moveset_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
