import Sequelize from "sequelize";

const sequelize = new Sequelize("auth-db", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  define: {
    syncOnAssociation: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.info("Connection has been established!");
  })
  .catch((e) => {
    console.error("Unable to connect to the database.");
    console.error(e.message);
  });

export default sequelize;
