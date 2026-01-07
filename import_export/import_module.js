/**
 * Default import  (Module Import/Export)
 */

import multiply from "./export_module.js";
console.log(multiply(2, 3));

/**
 * Named Import
 */

import { add, subtract } from "./export_module.js";
console.log(add(2, 5));
console.log(subtract(2, 5));
