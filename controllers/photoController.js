import Photo from "../models/photoModel.js";

const createPhoto= async(req,res)=>{
    const photo= await Photo.create(req.body)
    res.status(201).json({
        succeded: true,
        photo,
    });
};

export{createPhoto};
