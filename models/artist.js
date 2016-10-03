export default function (sequelize, DataTypes) {
  const Artist = sequelize.define('artist', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.TEXT,
    streamUrl: DataTypes.TEXT,
    purchaseUrl: DataTypes.TEXT,
    artworkSmall: DataTypes.TEXT,
    artworkLarge: DataTypes.TEXT,
  }, {
    paranoid: true,
    classMethods: {
      associate: (models) => {
        Artist.hasMany(models.track);
        Artist.hasMany(models.album);
      },
    },
    indexes: [
      {
        fields: ['name'],
      },
    ],
  });

  return Artist;
}
