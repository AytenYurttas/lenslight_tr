import mongoose from "mongoose";

const conn=()=>{
    mongoose.connect(process.env.DB_URL,{
        dbName: "lenslight_tr",
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connected to the DB succesully")
    }).catch((err)=>{
        console.log(`Connected to the DB err:,${err}`);
    });
};

export default conn;