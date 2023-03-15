const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL,{
 useNewUrlParser:true
}
)

.then(()=>{console.log(`Mongoose Connected`)})
.catch((err)=>{console.log(`Error ${err}`)})
