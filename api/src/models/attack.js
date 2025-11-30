import { DataTypes } from "sequelize";
export default function(sequelize, DataTypes) {
  return sequelize.define('attack', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    button: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    frame_startup: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    end_lag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    on_shield: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attack',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "attack_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
