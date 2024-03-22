'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomUsage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoomUsage.belongsTo(models.Client, { foreignKey: 'clientId' })
      RoomUsage.belongsTo(models.Room, { foreignKey: 'roomId' })
    }
  }
  RoomUsage.init({
    clientId: {
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'client id is required'
        }, 
        notEmpty : {
          msg : 'client id is required'
        }
      }
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'room id is required'
        }, 
        notEmpty : {
          msg : 'room id is required'
        }
      }
    },
    startTime: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'start time is required'
        }, 
        notEmpty : {
          msg : 'start time is required'
        }
      }
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'end time is required'
        }, 
        notEmpty : {
          msg : 'end time is required'
        }
      }
    },
    bookingDate: {
      type: DataTypes.DATE,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'booking date is required'
        }, 
        notEmpty : {
          msg : 'booking date is required'
        }
      }
    },
    quotaUsed: {
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'qouta used is required'
        }, 
        notEmpty : {
          msg : 'qouta used is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'RoomUsage',
  });
  return RoomUsage;
};