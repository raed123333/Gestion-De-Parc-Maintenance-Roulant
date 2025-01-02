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

export default router;