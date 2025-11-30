import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('character', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    out_of_shields: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'out_of_shield_options',
        key: 'id'
      }
    },
    ground_moveset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ground_moveset',
        key: 'id'
      }
    },
    air_moveset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'air_moveset',
        key: 'id'
      }
    },
    special_moveset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'special_moveset',
        key: 'id'
      }
    },
    smash_moveset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'smash_moveset',
        key: 'id'
      }
    },
    stages: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'character_stages',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'character',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "character_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
