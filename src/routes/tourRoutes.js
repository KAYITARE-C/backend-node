import express from "express";
import TourController from "../controllers/tourController";
import Validator from "../middlewares/validator";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAcess"

const tourRouter=express.Router();

tourRouter.post(
    "/register",
    verifyToken,
    verifyAccess("admin"),
    Validator.newTourAccountRules(),
    Validator.validateInput,
    TourController.createTour
);

tourRouter.get("/alltours",TourController.getAllTours);
tourRouter.get("/:id",TourController.getOneTour);
tourRouter.delete("/:id",TourController.deleteOneTour);





export default tourRouter;