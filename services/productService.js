const product = require("../models/productSchema");
const ObjectId = require("mongodb").ObjectId;
exports.createProduct = async (data) => {
    let exist = await product.findOne({ productName: data.productName });
    if (exist) {
        return ({ status: 403, sucess: false, message: "Product Already Exist" })
    }
    let result = await product.create(data);
    if (result) {
        return ({ status: 200, sucess: true, message: "Product created sucessfully", data: result });
    }
}

exports.findProduct = async (page,limit) => {

    // let result = await product.find().populate('categoryId')
    // let result = await product.find().populate({
    //     path: "categoryId",
    //     select: ["categoryName"]
    // }); 
    let pagination = {
        page:page ? parseInt(page):0,
        limit:limit ? parseInt(limit):10
    }
    let result = await product.aggregate([
        {
            $lookup: {
                from: "subcategories",
                localField: "subCatId",
                foreignField: "_id",
                as: "product_subcat",
                pipeline: [
                    {
                        $project: { _id:0,subCatName:1 }
                    },
                   
                ]
            },
           
        } ,{ $project : { _id : 1 , productImgPath : 0,  description:0} },
        {
            $group:{
                _id:"$product_subcat",
                total:{$sum:"$price"}
            }
        }
    ],

    ).skip(pagination.page*pagination.limit).limit(pagination.limit);
    let result1 = await product.count().skip(pagination.page*pagination.limit).limit(pagination.limit);
    
    if (result) {
        return ({ status: 200, sucess: true, message: "Product found sucessfully",count:result1, data: result })
    }
    else {
        return ({ status: 404, sucess: false, message: "Product Not Found.." })
    }
}

exports.getProductById = async (id) => {
    let exist = await product.findOne({ _id: new ObjectId(id) });
    if (!exist) {
        return ({ status: 404, sucess: false, message: "Product Doesn't Exist" })
    }
    else {
        return ({ status: 200, sucess: true, message: "Product Found Sucessfully", data: exist })
    }
}

exports.findProductByQuery = async(sortField,orderBy)=>{
    let objectField = {};
    objectField[sortField] = orderBy=== "asc" ? 1:-1;
    // console.log("objectField ====== ",objectField);
    let result = await product.find().sort(objectField);
    // console.log(result);
    if(!result){
        return ({status:404,sucess:false,message:"Product Not Found"})
    }
    else{
        return ({status:200,sucess:true,message:"Product Found Sucessfully",data:result})
    }
}


exports.getProductByLookup = async()=>{
    let result = await product.aggregate([
        {
            $group:{
                _id:"$brandId",
                productName:{$first:"$productName"},
                description:{$first:"$description"},
                brandName:{$first:"$brandName"},
                avgerage:{$sum:"$price"},
               
            },
        },
        // {$project:{"productName":1,"description":1}}
        
    //   {
    //     $lookup:{
    //         from:"subcategories",
    //         localField:"subCatId",
    //         foreignField:"_id",
    //         as:"prod_subCat",
    //         pipeline:[
    //             {
    //                 $lookup:{
    //                     from:"categories",
    //                     localField:"catId",
    //                     foreignField:"_id",
    //                     as:"subCat_category",
    //                     pipeline:[
    //                       { 
    //                          $project:{"categoryName":0,"_id":0,"__v":0},
    //                     },
    //                     ]
    //                 },
    
    //             } ,
    //             {
    //                 $group:{
    //                     _id:"$subCat_category.price",
    //                     total:{$sum:"$price"}
    //                 }
    //             },
    //             {
    //                 $project:{"catId":0,"__v":0,"_id":0}
    //             },
               
    //         ],     
    //     }, 
       
        
    //   },
    //   {
    //     $lookup:{
    //         from:"brands",
    //         localField:"brandId",
    //         foreignField:"_id",
    //         as:"prod_brand"
    //     }
    // },  
    // {
    //     "$project":{"isActive":0,"__v":0,"description":0,"productImgPath":0}
    //   },
    ])
    let result1 = await product.count();
    if(result){
        return ({status:200,sucess:true,message:"Product Data Find Sucessfuly",data1:result1,data:result})
    }
}

exports.getProductByGraphLookup = async()=>{
    let data = await product.aggregate([
        {
            $graphLookup:{
                form:"products",
                startWith:"$"
            }
        }
    ]);
}

