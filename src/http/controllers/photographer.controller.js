const model = require("../../models/index");
const { Op } = require("sequelize");

module.exports = {
  index: async (req, res) => {
    const avaiableBookings = await model.Booking.findAll({
      where: { confirmStatus: 0, prepaidStatus: 1 },
    });
    const customers = await model.User.findAll({ where: { typeId: 3 } });

    return res.render("photographer/index", {
      layout: "layouts/photographer.layout.ejs",
      avaiableBookings,
      customers,
    });
  },
  selectBooking: async (req, res) => {
    const { id } = req.params;
    const currentBooking = await model.Booking.findOne({ where: { id } });
    return res.render("photographer/selectBooking", {
      layout: "layouts/photographer.layout.ejs",
      currentBooking,
    });
  },
  handleSelect: async (req, res) => {
    const { id } = req.params;
    const { confirmStatus } = req.body;
    console.log(confirmStatus);
    await model.Booking.update(
      { confirmStatus: 1, photographerId: req.user.id },
      { where: { id } }
    );
    return res.redirect("/photographer");
  },
  bookingList: async (req, res) => {
    //filter status
    let where = {};
    const { status } = req.query;
    console.log(status);
    if (status === "active") {
      where.completeStatus = 1;
    } else if (status === "inactive") {
      where.completeStatus = 0;
    }

    const photographerBookings = await model.Booking.findAll({
      where: { photographerId: req.user.id, ...where },
    });
    const customers = await model.User.findAll({ where: { typeId: 3 } });

    return res.render("photographer/bookingList", {
      layout: "layouts/photographer.layout.ejs",
      photographerBookings,
      customers,
      req,
    });
  },
  review: async (req, res) => {
    const reviews = await model.CustomerReview.findAll({
      where: { photographerId: req.user.id },
    });
    const customers = await model.User.findAll({ where: { typeId: 3 } });
    const bookings = await model.Booking.findAll({
      where: { photographerId: req.user.id },
    });
    return res.render("photographer/review", {
      layout: "layouts/photographer.layout.ejs",
      reviews,
      bookings,
      customers,
    });
  },
};
