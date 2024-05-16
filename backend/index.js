//importinng
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbmessage.js";
import Pusher from "pusher";
import cors from'cors';
// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1729281", 
  key: "9104eb46ab580ccb5e37",
  secret: "fa5a643b12eb6c23e544",
  cluster: "eu",
  useTLS: true,
});

// middleware
app.use(express.json());
app.use(cors())

// DB config
const connection_url =
  "mongodb+srv://admin:chat@whatsapp.jxm5ase.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(
    connection_url
    // ,{
    //     useCreateIndex:true,
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");
  const msgCollection = db.collection("messagecontents");
  const changeStrem = msgCollection.watch();
  changeStrem.on("change", (change) => {
    console.log("A change occured", change);
    if (change.operationType === "insert") {
      const messageDatailes = change.fullDocument;
      pusher.trigger("message", "inserted", {
        name: messageDatailes.name,
        message: messageDatailes.message,
        timestamp: messageDatailes.timestamp,
        recieved:messageDatailes.recieved
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});
// ????

// api route

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/messages/sync", (req, res) => {
  Messages.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(401).send("failed");
      console.log(err);
    });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(401).send("failed");
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
