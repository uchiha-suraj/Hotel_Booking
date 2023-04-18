const hotelsByCity = (city: any) => {
  return {
    type: "HOTELS_BY_CITY",
    payload: city,
  }
}

export {hotelsByCity};