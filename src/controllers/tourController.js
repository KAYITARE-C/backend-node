import TourInfos from "../models/tour";

class TourController {
    //create tour in db
    static async createTour(req, res) {
      const tour = await TourInfos.create(req.body);
      if (!tour) {
        return res.status(404).json({ error: "tour not registered" });
      }
      return res
        .status(200)
        .json({ message: "tour created successfully", data: tour });
    }
      //get all tours
  static async getAllTours(req, res) {
    const tours = await TourInfos.find();
    if (!tours) {
      return res.status(404).json({ error: "tours not success retrieved" });
    }
    return res
      .status(200)
      .json({ message: "successfully retrieved tours", data: tours });
  }

  //get one tour
  static async getOneTour(req, res) {
    const tour = await TourInfos.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "tour not found" });
    }
    return res
      .status(200)
      .json({ message: "tour Found", data: tour });
  }

  //delete one user
  static async deleteOneTour(req, res) {
    const tour = await TourInfos.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "tour not found" });
    }
    return res
      .status(200)
      .json({ message: "one tour deleted" });
  } 

}
export default TourController;