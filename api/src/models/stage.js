import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('stage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
