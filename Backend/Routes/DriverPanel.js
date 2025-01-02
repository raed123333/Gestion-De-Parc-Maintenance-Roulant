import express from "express";
import DriverModel from "../Models/Driver.js";
const router =express.Router();


//Route for save a new driver

router.post('/', async (req, res) => {
  try {
    if (
      !req.body.FirstName ||
      !req.body.LastName ||
      !req.body.RegistrationNumber ||
      !req.body.Email ||
      !req.body.Password
    ) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    const newDriver = new DriverModel({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      RegistrationNumber: req.body.RegistrationNumber,
      Email: req.body.Email,
      Password: req.body.Password,
    });
    const driver = await newDriver.save();
    res.json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
        const {Email,Password} =req.body;
        DriverModel.findOne({Email})
        .then(driver=>{
                if(driver){
                        if(driver.Password === Password){
                                const accessToken = jwt.sign({ Email: Email }, "jwt-access-token-secret-key", { expiresIn: '1m' });
                                const refreshToken = jwt.sign({ Email: Email }, "jwt-refresh-token-secret-key", { expiresIn: '5m' });
            
                                res.cookie('accessToken', accessToken, { maxAge: 60000, secure: false }); 
                                res.cookie('refreshToken', refreshToken, { maxAge: 300000, httpOnly: true, secure: false, sameSite: 'strict' });
            
                                return res.json({ Login: true, message: "succes" });
                        }else{
                                return res.json({ Login: false, Message: "pwd not coorect" });
                        }
                }else{
                        return res.json({ Login: false, Message: "not found userres" });
                }
                

        })
        .catch(err=>{
                console.error(err.message);
                return res.status(500).json({ message: err.message });
        })


})

const varifyDriver=(req,res,next)=>{
        const accessToken=req.cookies.accessToken;
        if(!accessToken){
            if(renewToken(req,res)){
                next();
            }
        }else{
            jwt.verify(accessToken,'jwt-access-token-secret-key',(err,decoded)=>{
                if(err){
                    return res.json({valid:false, message:"not authenticated"})
                }else{
                    req.email=decoded.email;
                    next();
                }
            })
            
        };
}

const renewToken=(req,res)=>{
        const refreshtoken=req.cookies.refreshToken;
        let exist=false;
        if(!refreshtoken){
            return res.json({valid:false, message:"not refresh token"})
        }else{
            jwt.verify(refreshtoken,'jwt-refresh-token-secret-key',(err,decoded)=>{
                if(err){
                    return res.json({valid:false, message:"invalid refresh token  token"})
                }else{
                    const accessToken = jwt.sign({ email:decoded.email }, "jwt-access-token-secret-key", { expiresIn: '1m' });
                    res.cookie('accessToken', accessToken, { maxAge: 60000});
                    exist=true;
                }
            })
            
        };
        return exist;
    
    }
    router.get('/dashboardDriver',varifyDriver,(req, res) => {
        return res.json({valid:true, message:"authentication"})
    })
    





export default router;