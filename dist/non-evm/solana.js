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
exports.getNameSolana = exports.getAddressSolana = void 0;
// import { resolve } from "@bonfida/spl-name-service";
const web3_js_1 = require("@solana/web3.js");
const bonfida = require("@bonfida/spl-name-service");
function getAddressSolana(domainName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("mainnet-beta"));
            const address = yield bonfida.resolve(connection, domainName);
            return address.toBase58();
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressSolana = getAddressSolana;
function getNameSolana(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("mainnet-beta"));
            const name = yield bonfida.performReverseLookup(connection, new web3_js_1.PublicKey(address));
            return name;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getNameSolana = getNameSolana;
