const hotelsByCity = (city) => {
  return {
    type: "HOTELS_BY_CITY",
    payload: city,
  }
}

export {hotelsByCity};