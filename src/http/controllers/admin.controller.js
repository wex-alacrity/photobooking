const model = require("../../models/index");
module.exports = {
  index: async (req, res) => {
    const bookings = await model.Booking.findAll();
    const photographers = await model.User.findAll({ where: { typeId: 2 } });
    const customers = await model.User.findAll({ where: { typeId: 3 } });
    return res.render("admin/index", {
      layout: "layouts/admin.layout.ejs",
      bookings,
      photographers,
      customers,
    });
  },
  detail: (req, res) => {
    return res.render("admin/detail", { layout: "layouts/admin.layout.ejs" });
  },
  edit: (req, res) => {
    return res.render("admin/edit", { layout: "layouts/admin.layout.ejs" });
  },
  customerManage: (req, res) => {
    return res.render("admin/customerManage", {
      layout: "layouts/admin.layout.ejs",
    });
  },
  photographerManage: (req, res) => {
    res.render("admin/photographerManage", {
      layout: "layouts/admin.layout.ejs",
    });
  },
};
