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
exports.detectNameService = exports.fetchNSindexFromContract = void 0;
const types_1 = require("../types");
const extension_abi_1 = require("../abi/extension_abi");
const ethers_1 = require("ethers");
const extensionDataUrl = "https://sow-sdk-support-9gw2zt6e4-0xdead-e0f.vercel.app/api/extension";
const extensionContractAddr = "0x52DC661530B710F932285b288cdA8F29BF781eb6";
const providerUrl = "https://rpc-mumbai.maticvigil.com"; //just for test
function getExtensionFromDomain(domainName) {
    const extension = domainName.split('.').pop();
    if (!extension)
        return "";
    return extension.toLowerCase();
}
function fetchNSindexFromContract(extension) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new ethers_1.ethers.providers.JsonRpcProvider(providerUrl);
            const contract = yield new ethers_1.ethers.Contract(extensionContractAddr, extension_abi_1.extensionAbi, provider);
            const result = contract.getNameServiceIndex(extension);
            return result;
        }
        catch (err) {
            return 0;
        }
    });
}
exports.fetchNSindexFromContract = fetchNSindexFromContract;
function detectNameService(domainName) {
    return __awaiter(this, void 0, void 0, function* () {
        const extension = getExtensionFromDomain(domainName).toLowerCase();
        if (extension === "") {
            return types_1.SupportedChains.None;
        }
        const nsIndex = yield fetchNSindexFromContract(extension);
        if (nsIndex < 1 || nsIndex > 10) {
            return types_1.SupportedChains.None;
        }
        return nsIndex;
    });
}
exports.detectNameService = detectNameService;
// async function fetchExtensionData() {
//     try {
//         const response = await fetch(extensionDataUrl);
//         if(response.status !== 200) {
//             return extensionData;
//         }
//         return await response.json();
//     } catch(err) {
//         return extensionData;
//     }
// }
// export async function detectNameService(domainName: String) : Promise<SupportedChains> {
//     const extension = getExtensionFromDomain(domainName).toLowerCase();
//     if (extension === "") {
//         return SupportedChains.None;
//     }
//     const extensionMap = await fetchExtensionData();
//     const domainServiceName = extensionMap.hasOwnProperty(extension) ? extensionMap[extension] : null;
//     switch (domainServiceName) {
//         case "ENS":
//             return SupportedChains.ENS;
//         case "SpaceId":
//             return SupportedChains.SpaceId;
//         case "UnstoppableDomains":
//             return SupportedChains.UnstoppableDomains;
//         case "DotBit":
//             return SupportedChains.DotBit;
//         case "Zkns":
//             return SupportedChains.Zkns;
//         case "ICNS":
//             return SupportedChains.ICNS;
//         case "StargazeDomains":
//             return SupportedChains.StargazeDomains;
//         case "Bonfida":
//             return SupportedChains.Bonfida;
//         case "SuiNs":
//             return SupportedChains.SuiNs;
//         case "AptosNs":
//             return SupportedChains.AptosNs;
//         default:
//             return SupportedChains.ICNS;
//     }
// }
