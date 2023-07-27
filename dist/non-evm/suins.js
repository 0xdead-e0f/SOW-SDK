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
exports.getAddressSui = void 0;
// import { JsonRpcProvider } from '@mysten/sui.js';
const toolkit_1 = require("@suins/toolkit");
const sui_js_1 = require("@suins/toolkit/node_modules/@mysten/sui.js");
// import {SnsApi, queryForObjects} from '@snsdomains/js';
function getAddressSui(domainName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new sui_js_1.JsonRpcProvider();
            const suinsClient = new toolkit_1.SuinsClient(provider);
            const address = yield suinsClient.getAddress(domainName);
            return address;
            // const objects = await queryForObjects("DEVNET" as any);
            // const provider = new JsonRpcProvider();
            // const api = new SnsApi(provider as any, "DEVNET" as any, objects);
            // const address = await api.domains.getAddress("suins.sui")
            return address;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressSui = getAddressSui;
