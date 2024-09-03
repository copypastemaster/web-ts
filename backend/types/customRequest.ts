import { Request } from "express";

interface CustomRequest extends Request {
  customProperty?: string
}

export default CustomRequest