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
const aptosns_1 = require("./non-evm/aptosns");
const icns_1 = require("./non-evm/icns");
const solana_1 = require("./non-evm/solana");
const stargaze_1 = require("./non-evm/stargaze");
const suins_1 = require("./non-evm/suins");
const types_1 = require("./types");
const detectNameService_1 = require("./utils/detectNameService");
let ethProviderUrl = "";
let polygonProviderUrl = "";
let bnbProviderUrl = "";
let suiProviderUrl = "https://sui.getblock.io/3b3d419a-32f2-40f0-a0fc-9a7da31a227c/mainnet/";
class SoWsdk {
    constructor(param) {
        ethProviderUrl = param === null || param === void 0 ? void 0 : param.eth;
        polygonProviderUrl = param === null || param === void 0 ? void 0 : param.polygon;
        bnbProviderUrl = param === null || param === void 0 ? void 0 : param.bnb;
        suiProviderUrl = (param === null || param === void 0 ? void 0 : param.sui) ? param === null || param === void 0 ? void 0 : param.sui : suiProviderUrl;
    }
    setProviderUrl(param) {
        return __awaiter(this, void 0, void 0, function* () {
            ethProviderUrl = param.eth ? param.eth : ethProviderUrl;
            polygonProviderUrl = param.polygon ? param.polygon : polygonProviderUrl;
            bnbProviderUrl = param.bnb ? param.bnb : bnbProviderUrl;
            suiProviderUrl = param.sui ? param === null || param === void 0 ? void 0 : param.sui : suiProviderUrl;
        });
    }
    resolveAddress(domainName, ns) {
        return __awaiter(this, void 0, void 0, function* () {
            let service;
            if (ns) {
                service = ns;
            }
            else {
                service = (0, detectNameService_1.detectNameService)(domainName);
            }
            switch (service) {
                case types_1.SupportedChains.ENS:
                    return (0, ens_1.getAddressENS)(domainName, ethProviderUrl);
                case types_1.SupportedChains.SpaceId:
                    return (0, sid_1.getAddressSID)(domainName);
                case types_1.SupportedChains.UnstoppableDomains:
                    return (0, resolution_1.getAddressResolution)(domainName, ethProviderUrl, polygonProviderUrl);
                case types_1.SupportedChains.DotBit:
                    return (0, dotbit_1.getAddressDotBit)(domainName);
                case types_1.SupportedChains.Zkns:
                    return (0, zkns_1.getAddressZKns)(domainName);
                case types_1.SupportedChains.ICNS:
                    return (0, icns_1.getAddressICNS)(domainName);
                case types_1.SupportedChains.StargazeDomains:
                    return (0, stargaze_1.getAddressStargaze)(domainName);
                case types_1.SupportedChains.Bonfida:
                    return (0, solana_1.getAddressSolana)(domainName);
                case types_1.SupportedChains.SuiNs:
                    return (0, suins_1.getAddressSui)(domainName, suiProviderUrl);
                case types_1.SupportedChains.AptosNs:
                    return (0, aptosns_1.getAddressAptos)(domainName);
                default:
                    return "Not supported name service";
            }
        });
    }
    resolveName(address, ns) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (ns) {
                case types_1.SupportedChains.ENS:
                    return (0, ens_1.getNameENS)(address, ethProviderUrl);
                case types_1.SupportedChains.SpaceId:
                    return (0, sid_1.getNameSID)(address);
                case types_1.SupportedChains.UnstoppableDomains:
                    return (0, resolution_1.getNameResolution)(address, ethProviderUrl, polygonProviderUrl);
                case types_1.SupportedChains.DotBit:
                    return (0, dotbit_1.getNameDotBit)(address);
                case types_1.SupportedChains.Zkns:
                    return (0, zkns_1.getNameZKns)(address);
                case types_1.SupportedChains.ICNS:
                    return (0, icns_1.getNameICNS)(address);
                case types_1.SupportedChains.StargazeDomains:
                    return (0, stargaze_1.getNameStargaze)(address);
                case types_1.SupportedChains.Bonfida:
                    return (0, solana_1.getNameSolana)(address);
                case types_1.SupportedChains.AptosNs:
                    return (0, aptosns_1.getNameAptos)(address);
                case types_1.SupportedChains.SuiNs:
                    return (0, suins_1.getNameSui)(address, suiProviderUrl);
                default:
                    return "Not supported name service";
            }
        });
    }
}
exports.SoWsdk = SoWsdk;
