'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasMany(models.RoomUsage, { foreignKey: 'roomId' })
    }
  }
  Room.init({
    roomName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'room name is required'
        },
        notEmpty : {
          msg : 'room name is required'
        }
      }
    },
    costPerHour: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'cost per hour is required'
        },
        notEmpty : {
          msg : 'cost per hour is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};