// Initialiser package.json
// Installer les librairies : express, pg, dotenv, express-async-errors, http-status-codes, jsonwebtoken
// Faire les scripts
// .gitignore
// Setup le serveur

// Créer le dossier db
// Créer .env
// Créer database.sql

// Middlewares: notFound, errorHandler

// Errors: BadRequestError, UnauthenticatedError, NotFoundError

// Controllers :
// authController : register, login
// jobsController : createJob, getAllJobs, getJob, updateJob, deleteJob

// Routes : authRoutes, jobsRoutes
// /api/v1/auth
// /api/v1/jobs

// Créer une collection "Jobs API" dans Thunder Client
// Auth
// Jobs

require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// middlewares
const notFound = require("./middlewares/notFoundMiddleware.js");
const errorHandler = require("./middlewares/errorHandlerMiddleware.js");

// router
const jobsRouter = require("./routes/jobsRoute.js");
const authRouter = require("./routes/authRoutes.js");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
