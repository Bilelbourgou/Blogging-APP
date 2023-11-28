const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const path = require('path')
const multer = require('multer')
const authRoute = require('./routes/auth')
const authUser = require('./routes/user')
const authPost = require('./routes/posts')
const authCat = require('./routes/categories')
const PORT = 8080;
const app = express();

dotenv.config()
app.use(express.json());
app.use(cors());
app.use("/images",express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.CONNECT_URL)
.then(console.log('connected to the database'))
.catch((err)=>console.log(err))

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log('Destination:', 'server/images');
    callback(null, '');
  },
  filename: (req, file, callback) => {
    console.log('Filename:', 'file.png');
    callback(null, 'file.png');
  },
});


const upload = multer({storage:storage})
console.log(upload)

app.post("/upload",upload.single('file'),(req,res)=>{
  res.status(200).json('File has been uploaded')
  console.log(req.file)
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json('Internal Server Error');
});


app.use('/auth',authRoute)
app.use('/users',authUser)
app.use('/posts',authPost)
app.use('/categories',authCat)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
