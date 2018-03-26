import { NextFunction, Request, Response, Router } from "express"
const _ = require("underscore");
const response = require('../data-sample/data.json');
export class Hotel {
  public static endPoint(router: Router) {
    router.get("/api/hotel", (req: Request, res: Response, next: NextFunction) => {
      res.json(response);
    });

    router.get("/api/hotel/search", (req: Request, res: Response, next: NextFunction) => {
      const data = response;
      const filterParam = req.query;
      const filtered = this.filterQuery(data, filterParam);
      res.json(filtered);
    });
  }

  public static filterQuery(data, filterParam) {
    const filtered = _.filter(data, function(hotel) {
      if(!filterParam.stars){
        return hotel.name.toLowerCase().indexOf(filterParam.name.toLowerCase()) > -1;
      }else{
        return hotel.name.toLowerCase().indexOf(filterParam.name.toLowerCase()) > -1 &&
               hotel.stars == filterParam.stars;
      }
    });
    return filtered;
  }

}