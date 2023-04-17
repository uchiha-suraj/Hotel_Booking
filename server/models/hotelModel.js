const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema(
  {
    name: {
      type: 'string',
      required: [true, "Please enter a hotel name"]
    },
    location: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    price: {
      type: 'number',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    }
  },
  {
    timestamps: true,
  }
)

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;