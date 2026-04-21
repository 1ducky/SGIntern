import { randomBytes } from "crypto";

export default function generateToken() {
    return randomBytes(64).toString('hex')
}