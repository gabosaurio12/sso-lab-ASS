import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('air_moveset', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    neutral: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    },
    forward: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    },
    back: {
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
    },
    down: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'air_moveset',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "air_moveset_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
