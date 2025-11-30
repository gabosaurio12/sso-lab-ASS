import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('out_of_shield_options', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'attack',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'out_of_shield_options',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "out_of_shield_options_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
