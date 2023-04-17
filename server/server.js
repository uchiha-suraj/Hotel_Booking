const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Hotel = require('./models/hotelModel');
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send("Hello")
})

app.get('/hotels', async(req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.get('/hotels/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.post('/hotel', async(req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(200).json(hotel);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
})

app.put('/hotels/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const hotel = await Hotel.findByIdAndUpdate(id, req.body);
    // we didn't find any hotel in database
    if(!hotel) {
      return res.status(404).json({message: `cannot find any hotel with ID ${id}`});
    }
    const updatedHotel = await Hotel.findById(id);
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.delete('/hotels/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const hotel = await Hotel.findByIdAndDelete(id);
    if(!hotel) {
      return res.status(404).json({message: `cannot find any hotel with ID ${id}`});
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

mongoose
  .connect('mongodb+srv://admin:12345admin@cluster0.atzw2rf.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to MongoDB');
    app.listen(5000, () => {
      console.log("Node api app is running on port 5000");
    })
  })
  .catch((err) => {
    console.log(err);
  });