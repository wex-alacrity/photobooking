const model = require("../../models/index");

module.exports = {
  index: async (req, res) => {
    let where = {};
    const { confirmStatus, completeStatus } = req.query;
    console.log(confirmStatus, completeStatus);
    if (completeStatus === "complete") {
      where.completeStatus = 1;
    } else if (completeStatus === "incomplete") {
      where.completeStatus = 0;
    }
    if (confirmStatus === "confirm") {
      where.confirmStatus = 1;
    } else if (confirmStatus === "notConfirm") {
      where.confirmStatus = 0;
    }
    const customerId = req.user.id;
    const customerBookings = await model.Booking.findAll({
      where: { customerId, ...where },
    });
    const photographers = await model.User.findAll({ where: { typeId: 2 } });
    // console.log(photographers);
    return res.render("customers/booking", {
      customerBookings,
      photographers,
      req,
    });
  },
  create: (req, res) => {
    return res.render("customers/create");
  },
  handleCreate: async (req, res) => {
    const customerId = req.user.id;
    const { productId, note, location, startAt, endAt } = req.body;
    await model.Booking.create({
      productId,
      customerId,
      note,
      location,
      startAt,
      endAt,
      prepaidStatus: 0,
      confirmStatus: 0,
      fullpaidStatus: 0,
      completeStatus: 0,
    });
    return res.redirect("/customer/create");
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const currentBooking = await model.Booking.findOne({
      where: { id },
    });
    return res.render("customers/edit", { currentBooking });
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const { location, startAt, endAt, note } = req.body;
    const currentBooking = await model.Booking.update(
      {
        location,
        startAt,
        endAt,
        note,
      },
      {
        where: { id },
      }
    );
    console.log(currentBooking);

    return res.render("customers/booking");
  },
  detail: async (req, res) => {
    const { id } = req.params;
    const currentBooking = await model.Booking.findOne({
      where: { id },
    });
    const currentPhotographer = await model.User.findOne({
      where: { id: currentBooking.photographerId },
    });
    console.log(currentBooking.productId);
    return res.render("customers/detail", {
      currentBooking,
      currentPhotographer,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await model.Booking.destroy({ where: { id } });

    return res.redirect("/customer");
  },
  review: async (req, res) => {
    const { id } = req.params;
    return res.render("customers/reviewDetail", { id });
  },
  handleReview: async (req, res) => {
    const { id } = req.params;
    const { rating, comment } = req.body;
    console.log(rating, comment);
    const { customerId, photographerId } = await model.Booking.findOne({
      where: { id },
    });
    await model.CustomerReview.create({
      bookingId: id,
      customerId,
      photographerId,
      rating,
      comment,
    });
    return res.redirect("/customer");
  },
  reviewList: async (req, res) => {
    const reviews = await model.CustomerReview.findAll({
      where: { customerId: req.user.id },
    });
    const photographers = await model.User.findAll({ where: { typeId: 2 } });
    const bookings = await model.Booking.findAll({
      where: { customerId: req.user.id },
    });
    return res.render("customers/review", {
      reviews,
      photographers,
      bookings,
    });
  },
};
