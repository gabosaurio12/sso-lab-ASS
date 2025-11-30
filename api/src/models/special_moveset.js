import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('special_moveset', {
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
    side: {
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
    tableName: 'special_moveset',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "special_moveset_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
