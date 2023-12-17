const model = require("../../models/index");

module.exports = {
  index: async (req, res) => {
    const customerId = req.user.id;
    const customerBookings = await model.Booking.findAll({
      where: { customerId },
    });
    const photographers = await model.User.findAll({ where: { typeId: 2 } });
    // console.log(photographers);
    return res.render("customers/booking", { customerBookings, photographers });
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

    return res.send("OKLA");
  },
};
