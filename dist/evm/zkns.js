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
exports.getAddressZKns = void 0;
const zkns_abi_1 = require("../abi/zkns_abi");
const ethers_1 = require("ethers");
const zksync_web3_1 = require("zksync-web3");
const c_address = "0x935442AF47F3dc1c11F006D551E13769F12eab13";
function getAddressZKns(domainName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new zksync_web3_1.Provider("https://mainnet.era.zksync.io");
            const contract = yield new ethers_1.ethers.Contract(c_address, zkns_abi_1.zknsAbi, provider);
            const name = domainName.split('.').at(0);
            const address = yield contract.resolveAddress(name);
            return address;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressZKns = getAddressZKns;
