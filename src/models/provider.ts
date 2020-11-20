import {Model, DataTypes} from 'sequelize';
import {  database} from "../databases";


export class Provider extends Model{
    public id!: number;
    public slName!:String;
    public email!: String;
    public phone!: String;
}


Provider.init(
{
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
    },
    slName:{
        type: new DataTypes.STRING(64),
        allowNull:false,
    },
    email:{
        type: new DataTypes.DECIMAL(5, 2),
        allowNull:false,
    },
    phone: {
        type: new DataTypes.STRING,
        allowNull: false,
    }
},
{tableName:'providers',
sequelize:database,}
);