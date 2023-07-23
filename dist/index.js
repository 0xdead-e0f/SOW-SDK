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
exports.SoWsdk = void 0;
const dotbit_1 = require("./evm/dotbit");
const ens_1 = require("./evm/ens");
const resolution_1 = require("./evm/resolution");
const sid_1 = require("./evm/sid");
const zkns_1 = require("./evm/zkns");
const types_1 = require("./types");
const detectNameService_1 = require("./utils/detectNameService");
let ethProviderUrl = "";
let polygonProviderUrl = "";
let bnbProviderUrl = "";
class SoWsdk {
    constructor(param) {
        ethProviderUrl = param.eth;
        polygonProviderUrl = param.polygon;
        bnbProviderUrl = param.bnb;
    }
    setProviderUrl(param) {
        return __awaiter(this, void 0, void 0, function* () {
            ethProviderUrl = param.eth;
            polygonProviderUrl = param.polygon;
            bnbProviderUrl = param.bnb;
        });
    }
    resolveAddress(domainName) {
        return __awaiter(this, void 0, void 0, function* () {
            let service = (0, detectNameService_1.detectNameService)(domainName);
            switch (service) {
                case types_1.SupportedChains.ENS:
                    return (0, ens_1.getAddressENS)(domainName, ethProviderUrl);
                case types_1.SupportedChains.SpaceId:
                    return (0, sid_1.getAddressSID)(domainName, "");
                case types_1.SupportedChains.UnstoppableDomains:
                    return (0, resolution_1.getAddressResolution)(domainName, ethProviderUrl, polygonProviderUrl);
                case types_1.SupportedChains.DotBit:
                    return (0, dotbit_1.getAddressDotBit)(domainName);
                case types_1.SupportedChains.Zkns:
                    return (0, zkns_1.getAddressZKns)(domainName);
                default:
                    return "Not supported name service";
            }
        });
    }
}
exports.SoWsdk = SoWsdk;
