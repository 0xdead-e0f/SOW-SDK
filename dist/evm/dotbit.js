"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameDotBit = exports.getAddressDotBit = void 0;
const dotbit_1 = require("dotbit");
const dotbit = (0, dotbit_1.createInstance)();
function getAddressDotBit(domainName) {
    return __awaiter(this, void 0, void 0, function* () {
        const { account_id_hex } = yield dotbit.accountInfo(domainName);
        return account_id_hex;
    });
}
exports.getAddressDotBit = getAddressDotBit;
function getNameDotBit(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const { account } = yield dotbit.accountById(address);
        return account;
    });
}
exports.getNameDotBit = getNameDotBit;
