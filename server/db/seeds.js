const { Db } = require("mongodb");

use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Callum Wolfe",
        email: "wolfe.callum@gmail.com",
        checked_in: false
    },
    {
        name: "Duncan Ryan",
        email: "duncan.ryan@gmail.com",
        checked_in: false
    },
])