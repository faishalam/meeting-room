'use strict';
const {
  Model
} = require('sequelize');
const { genSalt } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Client, { foreignKey: 'userId' })
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'name is required'
        },
        notEmpty : {
          msg : 'name is required'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : {
        msg : 'email is already taken'
      },
      validate : {
        notNull : {
          msg : 'email is required'
        },
        notEmpty : {
          msg : 'email is required'
        }
      }
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'password is required'
        },
        notEmpty : {
          msg : 'password is required'
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : "user"
    },
  }, {
    hooks : {
      beforeCreate(instance, option) {
        instance.password = genSalt(instance.password)
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};