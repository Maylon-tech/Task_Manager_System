import mongoose from  'mongoose'


const todoSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
    })


const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium"
        },
        status: {
            type: String,
            num: ["Pending", "In Progress", "Completed"],
            default: "Pending"
        },
        dueDate: {
            type: Date,
            required: true
        },
        assigndTo: [
            {
                type: mongoose.Schema.types.ObjectId, 
                ref: "User"
            }
        ],
        createBy: {
            type: mongoose.Schema.types.ObjectId, 
            ref: "User"
        },
        attachments: [
            {
                type: String
            }
        ],
        todoChecklist: [
            todoSchema
        ],
        progress: {
            type: Number, default: 0
        }
    },
    { timestamps: true }
)

export default mongoose.model("Task", taskSchema)