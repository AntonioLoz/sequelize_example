import {  database} from "../databases";
import {DataTypes, Model,   } from "sequelize";


export class User extends Model{
    public id!: Number;
    public name!: String;
    public familyName!: String; 
    public email!: String;
}

User.init(
    {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{
            type: new DataTypes.STRING(128),
            allowNull:true,
        },
        familyName:{
            type: new DataTypes.STRING(128),
            allowNull:true,
        },
        email:{
            type: new DataTypes.STRING(128),
            allowNull:true,
        }

 },
    {
        tableName:'users',
        sequelize:database,
    }

);