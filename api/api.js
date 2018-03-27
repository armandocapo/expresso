const express = require('express');
const apiRouter = express.Router();
const employeesRouter = require('./employees.js');
const menusRouter = require('./menus.js');

apiRouter.use('/employees', employeesRouter); //Use main routers (employees and menus). Sub-routers (timesheets and menu-items) to be called by 'parent' router.
apiRouter.use('/menus', menusRouter);

module.exports = apiRouter;
