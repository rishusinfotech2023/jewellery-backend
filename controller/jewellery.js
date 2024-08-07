// const cloudinary=require('cloudinary').v2;
// const upload = require('../middleware/upload');
// const Jewellery=require('../module/jewllery');

// exports.jewellery=async(req,res)=>{
//     try{

//         if(!req.files||!req.files.length===0){
//             return res.json({success:false,message:'no file is provided'});
//         }
//         const {name,price,description,discount,material,category,gender,gross_weight,net_weight}=req.body

//         if(!name||!price||!descripiton||!discount||!material||!category||!gender||!gross_weight||!net_weight){
//             return res.status(400).json({message:'all fields are require'});
//         }

//         const uploadedFiles=[];

//         for(const file of req.files){
//             const result=await cloudinary.uploader.upload(file.path,{folder:'image'});
//             uploadedFiles.push({client_id:result.public_id,url:result.secure_url});
//         }
//        const newjewellery=new Jewellery({
//         upload:uploadedFiles,
//         name,
//         price,
//         description,
//         discount,
//         material,
//         category,
//         gender,
//         gross_weight,
//         net_weight
//        })
//        await newjewellery.save();
//        return res.json({
//         success:true,
//         files:uploadedFiles,
//         message:"file uploaded and saved succefully",
//         jewellery:newjewellery
//        });
//     }catch(error){
//         console.log('error uploding jewellery',error);
//         return res.status(500).json({success:false,message:'an error occure while uploading files'})
//     }
// };

// exports.getjewellery=async(req,res)=>{
//     try{
//         const jewellery=await Jewellery.find();
//         if(!jewellery||jewellery.lenth===0){
//             return res.json({message:'no photo found'});
//         }
//         return res.json({message:"dashboard retrived successfully",jewellery})

//     }catch (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Failed to fetch dashboard", error: err.message });
//     }
// };
// exports.getOnejewellery= async (req,res)=>{
//     try{
//         const Id=req.params.Id;
//         if(Id){
//             const jewellery=await Jewellery.findById(Id);
//             if(!jewellery){
//                 return res.status(404).json({message:'jewellery is not found'})
//             }
//             return res.status(200).json(jewellery);
//         }
//         const jewller=await Jewellery.find();
//         return res.status(200).json(jewller);
//     }catch(err){
//         console.error(err);
//         return res.status(500).json({message:'failed to fetch jewellery',error:err.message})
//     }
// };
// exports.deleteProduct=async (req,res)=>{
//     try{
//         const {Id}=req.params;
//         const product = await Jewellery.findById(Id);
//         if(!product){
//             return res.status(404).json({message:'product not found'});
//         }
// await Jewellery.deleteOne();
// return res.status(200).json({message:'product deleted successfully'});
//     }catch(error){
//         console.log(err);
//         return res.status(500).json({message:'failed to delete from database'});
//     }
// };

// // exports.saveProduct = (product) => {
// //     return db.execute(`INSERT INTO products (title, description, price, imageUrl) values (?,?,?,?)`,
// //         [
// //       product.title,
// //       product.description,
// //       product.price,
// //       product.upload
// //     ]);
// //   };

// exports.search=async(req,res)=>{
//     try{
//         const query=req.query.jewellery;
//         const n=await Jewellery.find({
//             $or:[
//                 {name:{$regex:query,$options:'i'}},
//                 {category:{$regex:query,$options:'i'}},
//             {material:{$regex:query,$options:'i'}},
//             {gender:{$regex:query,$options:'i'}}
//             ]
//         },{upload:1,name:1,price:1,description:1,category:1,gender:1,material:1,gross_weight:1,net_weight:1}).exec();
//     res.json(n);
//     }catch(err){
//         res.status(500).json({messsage:err.message});
//     }
// }

// exports.getFindJewellery = async(req, res) => {

//     try {
//         const { criteria } = req.params;
//         console.log(`Criteria: ${criteria}`);

//         const allJewellery = await Jewellery.find();

//         let filtterJewellery = [];

//         if (!criteria) {
//             filtterJewellery = allJewellery;
//         } else if (['male', 'female', 'man', 'woman', 'price'].includes(criteria.toLowerCase())) {
//             filtterJewellery = allJewellery.filter(p =>
//                 p.gender && p.gender.toLowerCase() === criteria.toLowerCase()
//             );
//         } else {
//             const criteriaNumber = Number(criteria);

//             filtterJewellery = allJewellery.filter(p =>
//                 (p.name && p.name.toLowerCase().includes(criteria.toLowerCase())) ||
//                 (p.material && p.material.toLowerCase().includes(criteria.toLowerCase())) ||
//                 (p.category && p.category.toLowerCase().includes(criteria.toLowerCase()))||
//                 (!isNaN(criteriaNumber) && p.price === criteriaNumber)

//             );
//         }

//         if (filtterJewellery.length === 0) {
//             return res.status(400).json({ msg: "Jewellery Not found" });
//         }

//         res.status(200).json({ jewellery: filtterJewellery });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: "Server error" });
//     }

// }

// exports.updateJewellery=async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const{name,price,description,discount,material,category,gender,gross_weight,net_weight}=req.body;
//         if(!id){
//             return res.status(400).json({message:"product not found"});
//         }
//         const updateFields={name,price,description,discount,material,category,gender,gross_weight,net_weight};
//         Object.keys(updateFields).forEach(key=>{
//             if(updateFields[key]==undefined){
//                 updateFields[key];
//             }
//         });
//         const updateJewellery=await Jewellery.findByIdAndUpdate(id,updateFields,{new:true});
//         if(!updateJewellery){
//             return res.status(400).json({message:"Jewellery not found"});
//         }
//         return res.json({
//             success:true,
//             message:'jewellery updated successfully',
//             jewellery:updateJewellery
//         });
//     }catch(error){
//         console.log('error updating jewellery',error);
//         return res.status(500).json({message:"internal server error"})
//     }
// }

const cloudinary = require("cloudinary").v2;
const Jewellery = require("../module/jewllery");
const upload = require("../middleware/upload");
const User = require("../controller/user");
const jwt = require('../middleware/jwt')

exports.jewellery = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    
    try {
      if (!req.files || req.files.length === 0) {
        return res.json({ success: false, message: "No file is provided" });
      }

      const {
        name,
        price,
        description,
        discount,
        material,
        category,
        gender,
        gross_weight,
        net_weight,
      } = req.body;

      if (
        !name ||
        !price ||
        !description ||
        !discount ||
        !material ||
        !category ||
        !gender ||
        !gross_weight ||
        !net_weight
      ) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const uploadedFiles = [];

      for (const file of req.files) {
        try {
          const result = await cloudinary.uploader.upload(file.path, {
            folder: "image",
          });
          uploadedFiles.push({
            client_id: result.public_id,
            url: result.secure_url,
          });
        } catch (err) {
          // console.log("Error uploading file to Cloudinary:", uploadError);
          // return res.status(500).json({ success: false, message: "An error occurred while uploading to Cloudinary" });
          return res.status(500).json({ message : err.message})
        }
      }

      const newJewellery = new Jewellery({
        upload: uploadedFiles,
        name,
        price,
        description,
        discount,
        material,
        category,
        gender,
        gross_weight,
        net_weight,
      });

      await newJewellery.save();
      return res.json({
        success: true,
        files: uploadedFiles,
        message: "File uploaded and saved successfully",
        jewellery: newJewellery,
      });
    } catch (error) {
      console.log("Error uploading jewellery:", error);
      return res
        .status(500)
        .json({
          success: false,
          message: "An error occurred while uploading files",
        });
    }
  });
};


exports.getJewellery = async (req, res) => {
  try {
    const jewellery = await Jewellery.find();
    if (!jewellery || jewellery.length === 0) {
      return res.json({ message: "No photo found" });
    }
    return res.json({ message: "Dashboard retrieved successfully", jewellery });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Failed to fetch dashboard", error: err.message });
  }
};

exports.getOneJewellery = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const jewellery = await Jewellery.findById(id);
      if (!jewellery) {
        return res.status(404).json({ message: "Jewellery not found" });
      }
      return res.status(200).json(jewellery);
    }
    const jewellery = await Jewellery.find();
    return res.status(200).json(jewellery);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Failed to fetch jewellery", error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Jewellery.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Jewellery.deleteOne({ _id: id });
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error deleting product:", error);
    return res.status(500).json({ message: "Failed to delete from database" });
  }
};

exports.search = async (req, res) => {
  try {
    const query = req.query.jewellery;
    const results = await Jewellery.find(
      {
        $or: [
          { name: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } },
          { material: { $regex: query, $options: "i" } },
          { gender: { $regex: query, $options: "i" } },
        ],
      },
      {
        upload: 1,
        name: 1,
        price: 1,
        description: 1,
        category: 1,
        gender: 1,
        material: 1,
        gross_weight: 1,
        net_weight: 1,
      }
    ).exec();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFindJewellery = async (req, res) => {
  try {
    const { criteria } = req.params;
    console.log(`Criteria: ${criteria}`);
    const allJewellery = await Jewellery.find();
    let filteredJewellery = [];

    if (!criteria) {
      filteredJewellery = allJewellery;
    } else if (
      ["male", "female", "man", "woman", "price"].includes(
        criteria.toLowerCase()
      )
    ) {

      filteredJewellery = allJewellery.filter(
        (p) => p.gender && p.gender.toLowerCase() === criteria.toLowerCase()
      );
    } else {
      const criteriaNumber = Number(criteria);
      filteredJewellery = allJewellery.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(criteria.toLowerCase())) ||
          (p.material &&
            p.material.toLowerCase().includes(criteria.toLowerCase())) ||
          (p.category &&
            p.category.toLowerCase().includes(criteria.toLowerCase())) ||
          (!isNaN(criteriaNumber) && p.price === criteriaNumber)
      );
    }

    if (filteredJewellery.length === 0) {
      return res.status(400).json({ msg: "Jewellery not found" });
    }

    res.status(200).json({ jewellery: filteredJewellery });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateJewellery = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      description,
      discount,
      material,
      category,
      gender,
      gross_weight,
      net_weight,
    } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Product not found" });
    }

    const updateFields = {
      name,
      price,
      description,
      discount,
      material,
      category,
      gender,
      gross_weight,
      net_weight,
    };
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    const updatedJewellery = await Jewellery.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );
    if (!updatedJewellery) {
      return res.status(400).json({ message: "Jewellery not found" });
    }

    return res.json({
      success: true,
      message: "Jewellery updated successfully",
      jewellery: updatedJewellery,
    });
  } catch (error) {
    console.log("Error updating jewellery:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

