
module.exports = function(sequelize, DataTypes) {

    var Applicant = sequelize.define("Applicant", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        skill_set: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1],
                isEmail: true
            }
        },
        added: {
            type: DataTypes.DATE
        }, 
    }, 
        {
            timestamps: false
        
    });
    return Applicant;
};