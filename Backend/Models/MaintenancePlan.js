import mongoose from "mongoose";
const MaintenancePlanSchema =new  mongoose.Schema({
        car_id:Number,
        driver_name:String,
        amount:Number,
        breakdownt_type:String,
        start_date:Date,
        

})
const MaintenancePlanModel =mongoose.model('MaintenancePlan',MaintenancePlanSchema);

export default MaintenancePlanModel;