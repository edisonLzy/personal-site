// import { DataTypes, Model } from 'sequelize';
// import { sequelize } from './db';
// export function initComment() {
//     class Comment extends Model { };
//     Comment.init({
//         'comment_likes': {
//             type: DataTypes.BIGINT,
//             allowNull: false
//         },
//         'comment_date': {
//             type: DataTypes.DATE,
//             allowNull: false
//         },
//         'comment_content': {
//             type: DataTypes.STRING(256),
//             allowNull: false
//         },
//         'comment_parent_id': {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     },
//     {
//             sequelize,
//             paranoid: true,
//     }
//     )
//     return Comment
// } 