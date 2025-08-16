import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addLawyer, allLawyers, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/lawyerController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-lawyer", authAdmin, upload.single('image'), addLawyer)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-lawyers", authAdmin, allLawyers)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;