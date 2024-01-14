const mongoose = require('mongoose')
//require('dotenv').config()
//const mongoURI = process.env.mongoURI; 
const mongoURI='mongodb+srv://vikassingh25802:hE0RYwris7mnSsQ4@cluster0.o5lebgo.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB=async() =>{
   await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" , err)
        else {
            console.log("connected to mongo")
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
               const foodCategory = await mongoose.connection.db.collection("foodCategory");
               foodCategory.find({}).toArray(function (err, catData) {
                    if(err)console.log(err);
                    else{
                        global.food_items=data;
                        global.foodCategory=catData;
                    }
                })
            })
            
        }
    });
}

module.exports=mongoDB;
