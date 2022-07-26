const express = require("express");
const multer = require("multer");
const router = express.Router();
const session = require("express-session");
const { MemoryStore } = require("express-session");
const upload = multer({ storage: multer.memoryStorage() });
require("express-async-errors"); //Hack for async error handling

//Sessions
router.use(
  session({
    store: new MemoryStore(),
    name: "qid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

const admin_only = (req, res, next) => {
  const { passphrase } = req.session;

  if (!passphrase) {
    res.redirect("/login");
  } else if (passphrase === process.env.ADMIN) {
    next();
  } else {
    throw new Error("Permisos insuficientes");
  }
};

const both = (req, res, next) => {
  const { passphrase } = req.session;

  if (!passphrase) {
    res.redirect("/login");
  } else if (
    passphrase === process.env.GUEST ||
    passphrase === process.env.ADMIN
  ) {
    next();
  } else {
    throw new Error("Permisos insuficientes");
  }
};

const _AuthenticationController = require("./controllers/authentication_controller");
const AuthenticationController = new _AuthenticationController();
router.get("/login", AuthenticationController.login);
router.post("/login", AuthenticationController.authenticate);
router.get("/logout", AuthenticationController.logout);

const _AnimalsController = require("./controllers/animals_controller");
const AnimalsController = new _AnimalsController();
router.get("/animals/search", both, AnimalsController.search);
router.get("/animals", both, AnimalsController.index);
router.post(
  "/animals",
  [admin_only, upload.array("photos")],
  AnimalsController.create
);
router.get("/animals/new", admin_only, AnimalsController.new);
router.get("/animals/:id", both, AnimalsController.show);
router.get("/animals/:id/edit", admin_only, AnimalsController.edit);
router.post(
  "/animals/:id/update",
  [admin_only, upload.array("photos")],
  AnimalsController.update
);
router.get("/animals/:id/delete", admin_only, AnimalsController.delete);
router.get("/animals/:id/print", both, AnimalsController.print);

const _RescuesController = require("./controllers/rescues_controller");
const RescuesController = new _RescuesController();
router.get("/animals/:animal_id/rescue", both, RescuesController.show);
router.post("/animals/:animal_id/rescue", admin_only, RescuesController.create);
router.get("/animals/:animal_id/rescue/new", admin_only, RescuesController.new);
router.get(
  "/animals/:animal_id/rescue/edit",
  admin_only,
  RescuesController.edit
);
router.post(
  "/animals/:animal_id/rescue/update",
  admin_only,
  RescuesController.update
);
router.get(
  "/animals/:animal_id/rescue/delete",
  admin_only,
  RescuesController.delete
);

const _EventsController = require("./controllers/events_controller");
const EventsController = new _EventsController();
router.get("/animals/:animal_id/events", both, EventsController.index);
router.get("/animals/:animal_id/events/new", admin_only, EventsController.new);
router.post("/animals/:animal_id/events", admin_only, EventsController.create);
router.get(
  "/animals/:animal_id/events/:id/delete",
  admin_only,
  EventsController.delete
);

const _AppointmentsController = require("./controllers/appointments_controller");
const AppointmentsController = new _AppointmentsController();
router.get(
  "/animals/:animal_id/appointments",
  both,
  AppointmentsController.index
);
router.get(
  "/animals/:animal_id/appointments/new",
  admin_only,
  AppointmentsController.new
);
router.post(
  "/animals/:animal_id/appointments",
  admin_only,
  AppointmentsController.create
);
router.get(
  "/animals/:animal_id/appointments/:id/delete",
  admin_only,
  AppointmentsController.delete
);

const _HomesController = require("./controllers/homes_controller");
const HomesController = new _HomesController();
router.get("/animals/:animal_id/homes", both, HomesController.index);
router.get("/animals/:animal_id/homes/new", admin_only, HomesController.new);
router.post("/animals/:animal_id/homes", admin_only, HomesController.create);
router.get("/animals/:animal_id/homes/:id", both, HomesController.show);
router.get(
  "/animals/:animal_id/homes/:id/edit",
  admin_only,
  HomesController.edit
);
router.post(
  "/animals/:animal_id/homes/:id/update",
  admin_only,
  HomesController.update
);
router.get(
  "/animals/:animal_id/homes/:id/delete",
  admin_only,
  HomesController.delete
);

const _CalendarController = require("./controllers/calendar_controller");
const CalendarController = new _CalendarController();
router.get("/calendar", both, CalendarController.show);

const _NeighborhoodsController = require("./controllers/neighborhoods_controller");
const NeighborhoodsController = new _NeighborhoodsController();
router.get("/neighborhoods/:zip_code", NeighborhoodsController.details);


// If we dont have a match, we redirect to main page
router.all("*", (req, res) => {
  res.redirect("/animals");
});

// Error handling
router.use((error, req, res, next) => {
  res.status(403);
  res.render("error", { error });
  next(error);
});

module.exports = router;
