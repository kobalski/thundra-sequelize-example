const thundra = require("@thundra/core")();
// Sequilize should required after thundra initialization
const Sequelize = require('sequelize');

exports.handler = thundra((event, context, callback) => {
    const sequelize = new Sequelize('dbname', 'dbusername', 'dbpassword', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });

    const Customer = sequelize.define('customer', {
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        }
    });

    Customer.sync({force: true}).then(() => {  
        Customer.create({
          firstName: 'John',
          lastName: 'Hancock'
        }).then(() => {
            Customer.findAll().then(users => {
                console.log(users);
                callback(null, users);
            });
        });
    });
});

