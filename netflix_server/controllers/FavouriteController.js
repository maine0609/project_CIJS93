const Favourite = require("../models/FavouriteModel");

module.exports = {
  store: async (req, res) => {
    try {
      const data = await Favourite.findOne({
        id: req.body.id,
      });
      if (data) {
        res.json({ message: "đã có trong danh sách" });
      } else {
        const favourite = new Favourite(req.body);
        favourite.id = req.body.id;
        favourite.name = req.body.name;
        await favourite.save().then((result) => {
          res.json({ favourite: result });
        });
      }
    } catch (error) {
      res.json({ error });
    }
  },
  get: async (_req, res) => {
    try {
      const data = await Favourite.find({});
      console.log(data);
      res.json({ data });
    } catch (error) {
      res.json({ error });
    }
  },
};
