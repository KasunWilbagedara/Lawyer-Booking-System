import express from 'express';
import { loginLawyer, appointmentsLawyer, appointmentCancel, lawyerList, changeAvailablity, appointmentComplete, lawyerDashboard, lawyerProfile, updateLawyerProfile } from '../controllers/lawyerController.js';
import authLawyer from '../middleware/authLawyer.js';
const lawyerRouter = express.Router();

lawyerRouter.post("/login", loginLawyer)
lawyerRouter.post("/cancel-appointment", authLawyer, appointmentCancel)
lawyerRouter.get("/appointments", authLawyer, appointmentsLawyer)
lawyerRouter.get("/list", lawyerList)
lawyerRouter.post("/change-availability", authLawyer, changeAvailablity)
lawyerRouter.post("/complete-appointment", authLawyer, appointmentComplete)
lawyerRouter.get("/dashboard", authLawyer, lawyerDashboard)
lawyerRouter.get("/profile", authLawyer, lawyerProfile)
lawyerRouter.post("/update-profile", authLawyer, updateLawyerProfile)

export default lawyerRouter;