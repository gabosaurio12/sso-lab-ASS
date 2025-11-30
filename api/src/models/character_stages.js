import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('character_stages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stage',
        key: 'id'
      }
    },
    state: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'character_stages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "character_stages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
