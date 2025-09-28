import { NODE_ENVIRONMENT } from "../configs/env.js";
import { NODE_ENVIRONMENTS } from "../constants/env.js";

export function isDev(): boolean {
  return NODE_ENVIRONMENT === NODE_ENVIRONMENTS?.DEVELOPMENT;
}
