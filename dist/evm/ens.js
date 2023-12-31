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
exports.getNameENS = exports.getAddressENS = void 0;
const ethers_1 = require("ethers");
function getAddressENS(domainName, providerUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new ethers_1.ethers.providers.JsonRpcProvider(providerUrl);
            const address = yield provider.resolveName(domainName);
            return address;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressENS = getAddressENS;
function getNameENS(address, providerUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new ethers_1.ethers.providers.JsonRpcProvider(providerUrl);
            const name = yield provider.lookupAddress(address);
            return name;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getNameENS = getNameENS;
