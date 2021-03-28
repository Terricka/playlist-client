module.exports = (sequelize, Sequelize) => {
    const Playlist = sequelize.define("playlist", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      }, 
      createdDate: {
        type: Sequelize.DATE
      },
      modifiedDate: {
          type: Sequelize.DATE
      }
    });
  
    return Playlist;
  };