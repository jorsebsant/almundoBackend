import { NextFunction, Request, Response, Router } from "express"
const fs = require('fs');
const response = require('../data-sample/data.json');
export class Hotel {
  public static endPoint(router: Router) {
    router.get("/api/hotel", (req: Request, res: Response, next: NextFunction) => {
      res.json(response);
    });
  }

}