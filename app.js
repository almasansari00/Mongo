//Connect to localHost
const mongoose = require("mongoose");

//Connection Creation
mongoose
  .connect("mongodb://localhost:27017/Almas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Established"))
  .catch((err) => console.log(err));

//Create Schema
//A Mongoose Schema Defiines the structure of the document,
//default values, validators, etc...
const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  authoe: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//Collection Creation
const Playlist = new mongoose.model("Playlist", playListSchema);

const createDocument = async () => {
  //create a document
  try {
    const reactPlaylist = new Playlist({
      name: "Node JS",
      ctype: "Back End",
      videos: 20,
      author: "almas",
      active: true,
    });
    //Insert one Record use save()
    //to Insert Many Record Use insertMany()
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// createDocument();

const getDocument = async () => {
  // const result = await Playlist.find({ctype:"Front End"});
  // const result = await Playlist.find({ctype:"Front End"});
  // const result = await Playlist.find({ctype:"Front End"}).select({name:1});
  const result = await Playlist.find({ ctype: "Front End" })
    .select({ name: 1 })
    .limit(1);
  console.log(result);
};

//Comparision Opeartor


getDocument();
