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
exports.getNameResolution = exports.getAddressResolution = void 0;
const resolution_1 = require("@unstoppabledomains/resolution");
function getAddressResolution(domainName, ethProviderUrl, polygonProviderUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resolution = new resolution_1.Resolution({
                sourceConfig: {
                    uns: {
                        locations: {
                            Layer1: {
                                url: ethProviderUrl,
                                network: 'mainnet',
                            },
                            Layer2: {
                                url: polygonProviderUrl,
                                network: 'polygon-mainnet',
                            },
                        },
                    },
                    zns: {
                        url: 'https://api.zilliqa.com',
                        network: 'mainnet',
                    },
                },
            });
            const address = yield resolution.addr(domainName, 'ETH');
            return address;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressResolution = getAddressResolution;
function getNameResolution(address, ethProviderUrl, polygonProviderUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resolution = new resolution_1.Resolution({
                sourceConfig: {
                    uns: {
                        locations: {
                            Layer1: {
                                url: ethProviderUrl,
                                network: 'mainnet',
                            },
                            Layer2: {
                                url: polygonProviderUrl,
                                network: 'polygon-mainnet',
                            },
                        },
                    },
                    zns: {
                        url: 'https://api.zilliqa.com',
                        network: 'mainnet',
                    },
                },
            });
            const name = yield resolution.reverse(address);
            return name;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getNameResolution = getNameResolution;
