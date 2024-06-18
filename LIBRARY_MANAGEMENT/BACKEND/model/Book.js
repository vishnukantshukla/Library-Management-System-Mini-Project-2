const mongoose=require('mongoose')

const BookSchema=new mongoose.Schema({
    image:{type:String,required:true,trim:true},
    BookName:{type:String,required:true,trim:true},
    PublishYear:{type:String,required:true},
    Price:{type:Number,required:true},
    Quantity:{type:Number,required:true},
    Issued:{type:Number},
    Desc:{type:String,trim:true},
})

const Book=mongoose.model("Book",BookSchema);
module.exports = Book;