"use strict";
// import { zknsAbi } from "../abi/zkns_abi";
// import { ethers } from "ethers";
// import { Provider } from "zksync-web3";
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
exports.getNameZKns = exports.getAddressZKns = void 0;
// const c_address = "0x935442AF47F3dc1c11F006D551E13769F12eab13";
// export async function getAddressZKns(domainName: string) {
//     try{
//         const provider = new Provider("https://mainnet.era.zksync.io");
//         const contract = await new ethers.Contract(c_address, zknsAbi, provider);
//         const [, domain, topLevelDomain] = domainName.match(/^(.+)\.([^.]+)$/) || [];
//         const address = await contract.resolveAddress(domain);
//         return address;
//     } catch (err) {
//         throw err;
//     }
// }
//https://omniapi.zkns.app/domain-resolver/getReverseRecord/0x30d89290A4460E577AA8297759aBe6024A27125d
function getAddressZKns(domainName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://omniapi.zkns.app/domain-resolver/getRecord/${domainName}`);
            const address = response.text();
            return address;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressZKns = getAddressZKns;
function getNameZKns(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://omniapi.zkns.app/domain-resolver/getReverseRecord/${address}`);
            const name = response.text();
            return name;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getNameZKns = getNameZKns;
