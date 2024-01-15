"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTransaction = void 0;
const withTransaction = (script) => `\nwith transaction\n${script}\nend transaction\n`;
exports.withTransaction = withTransaction;
