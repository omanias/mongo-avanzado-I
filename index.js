import express from 'express'
import userModel from './models/users.js'
import mongoose from 'mongoose'
import studentModel from './models/students.js'
import courseModel from './models/courses.js'

const app = express()

const PORT = 8080


const enviroment = async () => {
    await mongoose.connect("mongodb+srv://username:pass@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority")
    /*   let response = await userModel.find({ first_name: "Orly" }).explain("executionStats")
      console.log(response) */

    /*     await studentModel.create({
            first_name: "Miguel",
            last_name: "Perez",
            email: "miguelperez@mail.com",
            gender: "Male"
        }) */

    /*    await courseModel.create({
           title: "Curso de Backend",
           description: "backend de ecommerce",
           topics: ["Express", "MongoDB", "Mongoose", "WebSocket"]
       }) */

    /* let student = await studentModel.findOne({ _id: "651cbf07f6b1bec15b33b014" })
    console.log(student)
    student.courses.push({ course: "651cc049100680e1484b2b11" })

    let result = await studentModel.updateOne({ _id: "651cbf07f6b1bec15b33b014" }, student)
    console.log(result) */

    let student = await studentModel.findOne({ _id: "651cbf07f6b1bec15b33b014" }).populate('courses.course')
    console.log(student)
}

enviroment()

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})