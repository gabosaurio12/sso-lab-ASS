import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('ground_moveset', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jab: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    },
    forward_tilt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    },
    up_tilt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    },
    down_tilt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ground_moveset',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ground_moveset_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
