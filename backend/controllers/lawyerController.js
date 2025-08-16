import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import lawyerModel from "../models/lawyerModel.js";
import appointmentModel from "../models/appointmentModel.js";

// API for lawyer Login 
const loginLawyer = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await lawyerModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get lawyer appointments for lawyer panel
const appointmentsLawyer = async (req, res) => {
    try {

        const { lawId } = req.body
        const appointments = await appointmentModel.find({ lawId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment for lawyer panel
const appointmentCancel = async (req, res) => {
    try {

        const { lawId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.lawId === lawId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to mark appointment completed for lawyer panel
const appointmentComplete = async (req, res) => {
    try {

        const { lawId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.lawId === lawId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to get all lawyers list for Frontend
const lawyerList = async (req, res) => {
    try {

        const lawyers = await lawyerModel.find({}).select(['-password', '-email'])
        res.json({ success: true, lawyers })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to change lawyer availablity for Admin and lawyer Panel
const changeAvailablity = async (req, res) => {
    try {

        const { lawId } = req.body

        const lawData = await lawyerModel.findById(lawId)
        await lawyerModel.findByIdAndUpdate(lawId, { available: !lawData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get lawyer profile for  lawyer Panel
const lawyerProfile = async (req, res) => {
    try {

        const { lawId } = req.body
        const profileData = await lawyerModel.findById(lawId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update lawyer profile data from  lawyer Panel
const updateLawyerProfile = async (req, res) => {
    try {

        const { lawId, fees, address, available } = req.body

        await lawyerModel.findByIdAndUpdate(lawId, { fees, address, available })

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for lawyer panel
const lawyerDashboard = async (req, res) => {
    try {

        const { lawId } = req.body

        const appointments = await appointmentModel.find({ lawId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })



        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    loginLawyer,
    appointmentsLawyer,
    appointmentCancel,
    lawyerList,
    changeAvailablity,
    appointmentComplete,
    lawyerDashboard,
    lawyerProfile,
    updateLawyerProfile
}