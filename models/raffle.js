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
        },
        maximumEntries: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currentEntries: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // arrayOfEntries: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     len: [1]
        // },
        winnerOfRaffle: {
            type: DataTypes.STRING,
            allowNull: true,    
        }
    });

    

    return Raffle;
};