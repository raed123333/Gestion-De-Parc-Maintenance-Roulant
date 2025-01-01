import mongoose from "mongoose";
const AdminSchema=new mongoose.Schema({
        FirstName:String,
        LastName:String,
        RegistrationNumber:String,
        Email:String,
        Password:String
})
const AdminModel=mongoose.model("Admin",AdminSchema);
export default AdminModel