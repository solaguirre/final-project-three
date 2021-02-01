// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');

// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            },
            defaultValue:'defaultValue'
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [4]
        }
    },

    {
        // This forces any default 'User' to exclude the password when we query them;
        // this way we don't expose even a hashed password
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        },
        // If you want to show the password, for whatever reason, we expose with:
        // db.User.scope('withPassword').findAll() etc
        scopes: {
            withPassword: {
                // eslint-disable-next-line no-empty
                attributes: {}
            }
        }
    });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook('beforeCreate', function (user) {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    User.associate = (models) => {
        User.belongsToMany(models.Raffle, {
            through: 'user_raffles',
            as: 'users',
            foreignKey: 'user_id'
        });
    };

    return User;
};

