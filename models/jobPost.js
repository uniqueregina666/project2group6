module.exports = function(sequelize, DataTypes){

    var jobPost = sequelize.define("jobPost", {
        
        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },
        companyInfo: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        jobOverview: {
            type: Data.Types.TEXT,
            allowNull: false,
            len: [1]
        },
        bonuses: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        salaryRange: {
            type: DataTypes.INTERGER,
            allowNull: true
        }
        
    })
    return jobPost;
};