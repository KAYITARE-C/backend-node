import express from 'express';
import { check, validationResult } from "express-validator";



class Validator {
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return res.status(400).json({ message: errorMessage});
    }
    return next();


  };
  static newAccountRules(){
      return [
        //for user validator
      check("email","email is invalid").isEmail(),
      check("password","password is not strong").trim().isStrongPassword(),
      check("lastname","last name should be valid").trim().isAlpha(),
      check("firstname","first name should be valid").trim().isAlpha(),
      check("gender","gender should be among male,female,other,not-say ").trim().isIn(["male","female","other","not-say"])
    
    ] 
  };
  static newTourAccountRules(){
    return [
      //for user validator
    check("title","title is invalid").trim().isString(),
    check("seats"," seat is not valid must be number").isNumeric(),
    check("price"," price is not valid must be number").isNumeric(),
    check("available"," available space is not valid must be number").isNumeric(),
    check("dateScheduled","dateScheduled is not valid").isDate(),
    check("dueDate","dueDate is not valid").isDate(),
   
  
  ] 
}
}
export default Validator;
