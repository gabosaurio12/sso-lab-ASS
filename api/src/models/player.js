import Sequelize from 'sequelize';
export default function(sequelize, DataTypes) {
  return sequelize.define('player', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    main_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'character',
        key: 'id'
      }
    },
    secondary_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'character',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'player',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "player_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
