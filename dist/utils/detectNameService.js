"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectNameService = void 0;
const types_1 = require("../types");
function getExtensionFromDomain(domainName) {
    const extension = domainName.split('.').pop();
    if (!extension)
        return "";
    return extension.toLowerCase();
}
function detectNameService(domainName) {
    const extension = getExtensionFromDomain(domainName).toLowerCase();
    if (extension === "") {
        return types_1.SupportedChains.None;
    }
    switch (extension) {
        case "eth" || "ens":
            return types_1.SupportedChains.ENS;
        case "bnb":
            return types_1.SupportedChains.SpaceId;
        case "crypto" || "x" || "polygon" || "zil":
            return types_1.SupportedChains.UnstoppableDomains;
        case "bit":
            return types_1.SupportedChains.DotBit;
        case "era" || "zk":
            return types_1.SupportedChains.Zkns;
    }
    return types_1.SupportedChains.None;
}
exports.detectNameService = detectNameService;