const Contact = require("../models/Contact");

const createMessage = async(req,res)=>{

    try{

        const contact = await Contact.create(req.body);

        res.status(201).json(contact);

    }catch(error){

        res.status(500).json({message:error.message});

    }

}

module.exports={createMessage};