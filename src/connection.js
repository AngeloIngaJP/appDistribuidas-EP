const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://exparcial:leudCM2He8lTl6B1@cluster0.q7jcl.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Conexión correcta a MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
dbConnect();

//leudCM2He8lTl6B1
