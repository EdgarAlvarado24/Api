const userController = require("../controllers/userControllers");
const response = require("../utils/response");
const {validateUserData} = require("../validation/userValidation");


const routes = {
    "/": {
        GET: (_req, res) => {
            response(res, { data: {message: "running nodejs api"}});
        },
    },
    "/users": {
        GET: userController.getUsers,
        POST: (req, res) => {
            validateUserData(req, res, userController.createUser);
        },
    },
    "/users/:id": {
        GET: userController.getUserById,
        DELETE: userController.deleteUserById,
        PUT: (req, res) =>{
            validateUserData(req, res, userController.updateUser);
        },
    },
    notFound: (_req,res) => {
        response(res, {
            status: 404,
            data: {message: "requested resource not found!"}
        });
    },
};

module.exports = routes;