import { DataTypes } from 'sequelize';
import { sequelize } from './db';
export function initAdmin() {
  const Admin = sequelize.define('Admin', {
    account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      createdAt: false,
      updatedAt: false,
      paranoid: true,
    }
  )
  return Admin
} 