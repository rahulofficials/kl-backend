const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://george1234:george1234@cluster0.yavucfq.mongodb.net/prdb?retryWrites=true&w=majority",{
 useNewUrlParser:true
}
)

.then(()=>{console.log(`Mongoose Connected`)})
.catch((err)=>{console.log(`Error ${err}`)})
