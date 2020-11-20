import {  database} from "../databases";
import {DataTypes, Model,   } from "sequelize";


export class Product extends Model{
    public id!: Number;
    public title!: String; 
    public price!: number;
}

Product.init(
    {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true,
        },
        title:{
            type: new DataTypes.STRING(128),
            allowNull:true,
        },
       
        price:{
            type: new DataTypes.DECIMAL(5,2),
            allowNull:true,
        },

        

        

    },
    
    {
        tableName:'products',
        sequelize:database,
    }

);