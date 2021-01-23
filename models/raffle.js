

module.exports = function (sequelize, DataTypes) {
    const Raffles = sequelize.define('Raffle', {
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
        },
        maximumEntries: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currentEntries: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        winnerOfRaffle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    Raffles.associate = (models) => {
        Raffles.belongsToMany(models.User, {
            through: 'user_raffles',
            as: 'raffles',
            foreignKey: 'raffle_id'
        });
    };

    // db.Raffle.insert({itemName: '$5 Amazon Card', code:'123456789', minimumEntries: 1, maximumEntries: 5, currentEntries: 2, winnerOfRaffle: ''});

    return Raffles;
};