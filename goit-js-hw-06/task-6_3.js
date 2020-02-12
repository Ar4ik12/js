"use strict";
import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  const userGender = users.filter(user => user.gender === gender);
  return userGender.map(user => user.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
