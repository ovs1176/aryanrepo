const Item = require("../model/Item");

// Get All Item
const getAllItem = async (req, res) => {
    try{
        const items = await Item.find({ isDeleted:false });
        res.json(items);
    }catch(error){
       res.json({message : error});
    }
};

// Get Single Item
const getSingleItem = async (req, res) => {
    try{
        const items = await Item.findOne({_id:req.params.productId,isDeleted:false});
        if(items){
            res.send(items);
        }else{
            res.json({message : "This Data does not exist"});
        }

    }catch(error){
       res.json({message : error});
    }
};

// Add New Item
const createItem = async (req, res) => {
    const item = new Item({
        title : req.body.title,
        price : req.body.price,
        image : req.body.image,
        description : req.body.description,
        isDeleted : req.body.isDeleted
    });

    try {
        const savedItems = await item.save();
        res.send(savedItems);
    } catch(error){
        res.status(400).send(error);
    }
};

// Update Item
const updateItem = async (req, res) => {
    // const item = new Item({
    //     title : req.body.title,
    //     price : req.body.price,
    //     image : req.body.image,
    //     description : req.body.description
    // });

    const item=req.body;
    try {
        // const updateItem = await Item.findByIdAndUpdate(
        //     { _id : req.params.productId },{$set:item}
        // );
        console.log("Items:",item)
        const updateItem=await Item.findOneAndUpdate({_id:req.params.productId},{$set:item},{new:true})
        console.log("++++++",updateItem)
        res.send(updateItem);
    } catch(error){
        res.status(400).send(error);
    }
};

// Delete Item
const deleteItem = async (req, res) => {
    try{
        
        const hastodeleteitem = await Item.findOneAndUpdate({_id:req.params.productId},{$set:{isDeleted:true}},{new:true})
        res.json(hastodeleteitem);
    }catch(error){
       res.json({message : error});
    }
};


module.exports = {
    getAllItem,
    getSingleItem,
    createItem,
    updateItem,
    deleteItem
}