const db = require("./models");
const express = require("express");
const sequelize = require("sequelize");

const app = express();

app.use(express.json());

const User = db.User;
const Car = db.userOwnership;

const createUser = async (a, b, c) => {
  const result = await User.create({ firstName: a, lastName: b, emai: c });
  console.log(result);
};

const findUsers = async () => {
  const result = await User.findAll();

  result.forEach((user) => {
    console.log(user.dataValues);
  });
};

const findUsersFirstName = async () => {
  const result = await User.findAll({ attributes: ["firstName"] });
  console.log(result);
};

const findUserCount = async () => {
  const result = await User.findAll({
    attributes: [[sequelize.fn("COUNT", sequelize.col("id")), "userCount"]],
  });
  console.log("userCount:", result[0].dataValues.userCount);
};

const findUserById = async (id) => {
  const result = await User.findAll();
  const display = [...result];

  result.forEach((user, index) => {
    console.log(`User ${index + 1}:`);
    console.log("Data Values:", user.dataValues);
    // console.log('First Name:', user.dataValues.firstName);
    // console.log('Last Name:', user.dataValues.lastName);
    // console.log('Email:', user.dataValues.emai);
    // Add more attributes as needed
  });
};

const findUserByName = async (word) => {
  const result = await User.findAll({
    attributes: ["id", "firstName", "lastName", "emai"],

    where: { firstName: { [sequelize.Op.like]: word } },
  });

  result.forEach((user, index) => {
    console.log(`user id :`, user.dataValues.id);
    console.log(user.dataValues);
  });
};

const deleteUser = async (id) => {
  await User.destroy({
    where: {
      id: id,
    },
  });
};

const updateUser = async (idTarget, firstNameNew, lastNameNew, emailNew) => {
  const result = await User.update(
    { firstName: firstNameNew, lastName: lastNameNew, emai: emailNew },
    { where: { id: idTarget } }
  );
};

//findUserCount();

//updateUser(5,"serenity","wallace","serwal@gdoole.com")
//updateUser(6,"sunny","wallace","sunwal@gdoole.com")
//findUsers();
//deleteUser(4);
//findUserById();

const createUserOwnedCar = async () => {
  const src = await User.findAll({
    attributes: ["id", "firstName"],
  });

  src.forEach(async (user) => {
    const result = await Car.create({
      id: user.dataValues.id,
      firstName: user.dataValues.firstName,
    });
  });
};

//createUserOwnedCar();

const carData1 = [
  ["Belsharoon", "Toyotomi"],
  ["Belsharoon GT", "Toyotomi"],
  ["Zetlieng", "Hundo Motors"],
  ["Bolshevik", "URska"],
  ["Omni", "ValksWogen"],
  ["Ultima", "Merci Buenoz"],
  ["Belsharoon", "Toyotomi"],
  ["Zeta Vee", "Hundo Motors"],
  ["Bolshevik RS", "URska"],
  ["Deadalus", "ValksWogen"],
  ["Ultima II", "Merci Buenoz"],
];

const updateOwnership = async (carData) => {
  const userId = await Car.findAll({ attributes: ["id"] });

  userId.forEach(async (idUser, index) => {
    const result = await Car.update(
      { carType: carData[index][0], carBrand: carData[index][1] },
      { where: { id: idUser.dataValues.id } }
    );
  });
};

//updateOwnership (carData1);

User.hasOne(Car, {foreignKey : 'id', as : 'ownership'} );
Car.belongsTo(User, {foreignKey : 'id', as: 'user'});


const findOwnerShip = async(userId)=>{

  //const result = await User.findByPk(userId,{include : {model : Car , as : 'ownership'}})

  const user = await User.findByPk(userId);
  const cars = await user.getOwnership();

   console.log('User Car',cars?`${cars.carType} - ${cars.carBrand}`:'No car found');
};

findOwnerShip(12);

User.sync();
Car.sync();
