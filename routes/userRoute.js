import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment,cancelAppointment } from '../controllers/userController.js'
import authUser from '../middleware/authUser.js'
import upload from '../middleware/multer.js'

const userRouter = express.Router()

// Create
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

// Read
userRouter.get('/get-profile', authUser, getProfile)
userRouter.get('/appointments', authUser, listAppointment)

// Update
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)

export default userRouter;