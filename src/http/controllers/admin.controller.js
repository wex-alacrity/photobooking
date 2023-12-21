const model = require("../../models/index");
const hash = require("../../utils/hash");
module.exports = {
  index: async (req, res) => {
    //filter
    let where = {};
    const { confirmStatus, completeStatus, prepaidStatus, fullpaidStatus } =
      req.query;
    // Lọc theo completeStatus
    where.completeStatus = completeStatus === "complete" ? 1 : 0;

    // Lọc theo confirmStatus
    where.confirmStatus = confirmStatus === "confirm" ? 1 : 0;
    // Lọc theo completeStatus
    where.prepaidStatus = prepaidStatus === "prepaid" ? 1 : 0;

    // Lọc theo confirmStatus
    where.fullpaidStatus = fullpaidStatus === "fullpaid" ? 1 : 0;
    //
    const bookings = await model.Booking.findAll({ ...where });
    const photographers = await model.User.findAll({ where: { typeId: 2 } });
    const customers = await model.User.findAll({ where: { typeId: 3 } });
    return res.render("admin/index", {
      layout: "layouts/admin.layout.ejs",
      bookings,
      photographers,
      customers,
      req,
    });
  },
  detail: async (req, res) => {
    const { id } = req.params;
    const currentBooking = await model.Booking.findOne({
      where: { id },
    });
    const currentPhotographer = await model.User.findOne({
      where: { id: currentBooking.photographerId },
    });
    const currentCustomer = await model.User.findOne({
      where: { id: currentBooking.customerId },
    });
    return res.render("admin/detail", {
      layout: "layouts/admin.layout.ejs",
      currentBooking,
      currentPhotographer,
      currentCustomer,
    });
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const currentBooking = await model.Booking.findOne({
      where: { id },
    });
    const currentPhotographer = await model.User.findOne({
      where: { id: currentBooking.photographerId },
    });
    const currentCustomer = await model.User.findOne({
      where: { id: currentBooking.customerId },
    });
    return res.render("admin/edit", {
      layout: "layouts/admin.layout.ejs",
      currentBooking,
      currentCustomer,
      currentPhotographer,
    });
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const {
      prepaidStatus,
      confirmStatus,
      completeStatus,
      filePath,
      totalPrice,
      fullpaidStatus,
    } = req.body;
    console.log(
      +(prepaidStatus ?? 0),
      +(confirmStatus ?? 0),
      +(completeStatus ?? 0),
      filePath,
      totalPrice,
      +(fullpaidStatus ?? 0)
    );
    await model.Booking.update(
      {
        prepaidStatus: +(prepaidStatus ?? 0),
        confirmStatus: +(confirmStatus ?? 0),
        completeStatus: +(completeStatus ?? 0),
        filePath,
        totalPrice,
        fullpaidStatus: +(fullpaidStatus ?? 0),
      },
      { where: { id } }
    );
    return res.redirect("/admin/edit/" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await model.Booking.destroy({ where: { id } });

    return res.redirect("/admin");
  },
  customerManage: async (req, res) => {
    const customers = await model.User.findAll({ where: { typeId: 3 } });
    return res.render("admin/customerManage", {
      layout: "layouts/admin.layout.ejs",
      customers,
    });
  },
  customerHistory: async (req, res) => {
    const { id } = req.params;
    const photographers = await model.User.findAll({ where: { typeId: 2 } });
    const currentCustomer = await model.User.findOne({ where: { id } });
    const bookings = await model.Booking.findAll({
      where: { customerId: id },
    });
    const customerReviews = await model.CustomerReview.findAll({
      where: { customerId: id },
    });
    return res.render("admin/customerHistory", {
      layout: "layouts/admin.layout.ejs",
      currentCustomer,
      bookings,
      customerReviews,
      photographers,
    });
  },
  photographerManage: async (req, res) => {
    const photographers = await model.User.findAll({ where: { typeId: 2 } });
    res.render("admin/photographerManage", {
      layout: "layouts/admin.layout.ejs",
      photographers,
    });
  },
  photographerAdd: (req, res) => {
    return res.render("admin/photographerAdd", {
      layout: "layouts/admin.layout.ejs",
    });
  },
  handlePhotographerAdd: async (req, res) => {
    const { name, email, phone, password } = req.body;
    await model.User.create({
      name,
      email,
      password: hash.make(password),
      phone,
      typeId: 2,
    });
    return res.redirect("/admin/manage/photographer");
  },
  reviewList: async (req, res) => {
    const reviews = await model.CustomerReview.findAll();
    const customers = await model.User.findAll({ where: { typeId: 3 } });
    const bookings = await model.Booking.findAll();
    return res.render("admin/review", {
      layout: "layouts/admin.layout.ejs",
      reviews,
      customers,
      bookings,
    });
  },
};
