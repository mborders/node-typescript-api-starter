import { Response, Request, NextFunction } from "express";
import { AppVersion } from "../models/AppVersion";

/**
 * GET /
 * Provide application information.
 */
export let getRoot = (req: Request, res: Response) => {
  res.json(new AppVersion("1.0"));
};