import mongoose, {Schema, model, connect} from "mongoose";

const UserSchema = mongoose.Schema;
const ObjectId = UserSchema.ObjectId;

const User = new UserSchema({
    id: ObjectId,
    name: String,
    surname: String,
    details: String,
    date: {type: Date, default: Date.now},
});



class DB {
    #link = "";
    _db;


    getInstance(){
        if(this._db){
            return this._db;
        }
        this._db = new DB();
        return this._db;
    }
}
const database = new DB();
database.getInstance();
export {database};

