import { Contributor } from "./models/contributor.js";
import { parser } from "./utils/parser.js"

let c = await parser('./data/d_dense_schedule.in.txt');

console.log(c);
