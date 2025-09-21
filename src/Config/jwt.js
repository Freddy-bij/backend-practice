import crypto from "crypto";

// generating a random secret key


export const secretKey = crypto.randomBytes(32).toString("hex");