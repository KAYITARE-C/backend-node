import express from "express";
import TourController from "../controllers/tourController";
import Validator from "../middlewares/validator";

const tourRouter=express.Router();

tourRouter.post(
    "/register",
    Validator.newTourAccountRules(),
    Validator.validateInput,
    TourController.createTour
);

tourRouter.get("/alltours",TourController.getAllTours);
tourRouter.get("/:id",TourController.getOneTour);
tourRouter.delete("/:id",TourController.deleteOneTour);





export default tourRouter;