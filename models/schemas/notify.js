/**
 * Created by youxiachai on 14-2-13.
 */

module.exports = function (sequelize, DataType) {
    return sequelize.define('notify', {
        id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
        message : {type: DataType.STRING, defaultValue : ''},
        type : {type: DataType.INTEGER, defaultValue : 1},
        status : {type: DataType.INTEGER, defaultValue : 0},
        user_id : {type: DataType.INTEGER},
        from_user_id : {type: DataType.INTEGER},
        object_type : {type: DataType.STRING} ,
        object_id : {type: DataType.INTEGER}
    },{
        timestamps : true,
        'createdAt' : 'created_at',
        'updatedAt': 'modified_at'
    });
}