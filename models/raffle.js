module.exports = function (sequelize, DataTypes) {
    const Raffle = sequelize.define('Raffle', {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        minimumEntries: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min : 2,
                max : 50
            }
        },
        maximumEntries: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min : 5,
                max : 50,
            }
        },
        winnerOfRaffle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    Raffle.associate = (models) => {
        Raffle.belongsToMany(models.User, {
            through: 'user_raffles',
            as: 'raffles',
            foreignKey: 'raffle_id'
        });
    };
    return Raffle;
};