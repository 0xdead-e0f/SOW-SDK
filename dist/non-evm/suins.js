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
exports.getNameSui = exports.getAddressSui = void 0;
const sui_js_1 = require("@mysten/sui.js");
const suiNsPackage = {
    PACKAGE_ADDRESS: '0xd22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0',
    SUINS_ADDRESS: '0x6e0ddefc0ad98889c04bab9639e512c21766c5e6366f89e696956d9be6952871',
    AUCTION_HOUSE: '0x2588e11685b460c725e1dc6739a57c483fcd23977369af53d432605225e387f9',
    AUCTIONS: '0x26ae0b9d1c4cd775cb39c8817498eef23adadbe7936302cf717d77b0a61b59b7',
    REGISTRY: '0xe64cd9db9f829c6cc405d9790bd71567ae07259855f4fba6f02c84f52298c106',
    REVERSE_REGISTRY: '0x2fd099e17a292d2bc541df474f9fafa595653848cbabb2d7a4656ec786a1969f',
};
function getAddressSui(domainName, fullnode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = new sui_js_1.Connection({
                fullnode,
            });
            const provider = new sui_js_1.JsonRpcProvider(connection);
            const [, domain, topLevelDomain] = domainName.match(/^(.+)\.([^.]+)$/) || [];
            const registryAddress = sui_js_1.SuiAddress.create(suiNsPackage.REGISTRY);
            const registryResponse = yield getDynamicFieldObject(registryAddress, [topLevelDomain, domain], `${suiNsPackage.PACKAGE_ADDRESS}::domain::Domain`, provider);
            const nameObject = parseRegistryResponse(registryResponse);
            return nameObject === null || nameObject === void 0 ? void 0 : nameObject.targetAddress;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressSui = getAddressSui;
/**
   * Returns the default name of the input address if it was set. Otherwise, it will return undefined.
   *
   * @param address a Sui address.
   */
function getNameSui(address, fullnode) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const connection = new sui_js_1.Connection({
            fullnode,
        });
        const provider = new sui_js_1.JsonRpcProvider(connection);
        const reverseAddress = sui_js_1.SuiAddress.create(suiNsPackage.REVERSE_REGISTRY);
        const res = yield getDynamicFieldObject(reverseAddress, address, 'address', provider);
        const data = parseObjectDataResponse(res);
        const labels = (_b = (_a = data === null || data === void 0 ? void 0 : data.value) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.labels;
        return Array.isArray(labels) ? (_c = labels.reverse()) === null || _c === void 0 ? void 0 : _c.join('.') : undefined;
    });
}
exports.getNameSui = getNameSui;
function getDynamicFieldObject(parentObjectId, key, type = '0x1::string::String', suiProvider) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const dynamicFieldObject = yield suiProvider.getDynamicFieldObject({
            parentId: parentObjectId,
            name: {
                type: type,
                value: key,
            },
        });
        if (((_a = dynamicFieldObject.error) === null || _a === void 0 ? void 0 : _a.code) === 'dynamicFieldNotFound')
            return;
        return dynamicFieldObject;
    });
}
const camelCase = (string) => string.replace(/(_\w)/g, (g) => g[1].toUpperCase());
const parseObjectDataResponse = (response) => { var _a, _b; return (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.fields; };
const parseRegistryResponse = (response) => {
    var _a, _b, _c, _d;
    const fields = ((_b = (_a = parseObjectDataResponse(response)) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.fields) || {};
    const object = Object.fromEntries(Object.entries(Object.assign({}, fields)).map(([key, val]) => [camelCase(key), val]));
    if ((_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.objectId) {
        object.id = response.data.objectId;
    }
    delete object.data;
    const data = (((_d = fields.data) === null || _d === void 0 ? void 0 : _d.fields.contents) || []).reduce((acc, c) => {
        const key = c.fields.key;
        const value = c.fields.value;
        return Object.assign(Object.assign({}, acc), { [camelCase(key)]: c.type.includes('Address') || key === 'addr'
                ? (0, sui_js_1.normalizeSuiAddress)(value)
                : value });
    }, {});
    return Object.assign(Object.assign({}, object), data);
};
