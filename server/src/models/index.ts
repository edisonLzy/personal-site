// 管理所有的模型 建立表之间的关联 
import { sequelize } from './db';
import {initAdmin} from './Admin';

export default async function(){
        const Admin = initAdmin()
        await sequelize.sync({
            alter:true
        })
        console.log("所有模型均已成功同步.");
}