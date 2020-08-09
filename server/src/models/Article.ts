// import { DataTypes, Model } from 'sequelize';
// import { sequelize } from './db';
// export function initArticle() {
//     class Article extends Model { }
//     Article.init(
//         {
//             'Article_content': {
//                 type: DataTypes.TEXT,
//                 allowNull: false
//             },
//             'Article_md': {
//                 type: DataTypes.TEXT,
//                 allowNull: false
//             },
//             'Article_views': {
//                 type: DataTypes.BIGINT,
//                 allowNull: false
//             },
//             'Article_date': {
//                 type: DataTypes.DATE,
//                 allowNull: false
//             },
//             'Article_likes': {
//                 type: DataTypes.BIGINT,
//                 allowNull: false
//             },
//         },
//         {
//             sequelize,
//             paranoid: true,
//         })
//     return Article
// } 