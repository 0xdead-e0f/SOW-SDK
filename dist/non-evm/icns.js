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
exports.getNameICNS = exports.getAddressICNS = void 0;
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const resolverAddress = "osmo1xk0s8xgktn9x5vwcgtjdxqzadg88fgn33p8u9cnpdxwemvxscvast52cdd";
function getAddressICNS(domainName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield cosmwasm_stargate_1.CosmWasmClient.connect("https://rpc.osmosis.zone");
            // const queryClient = new contracts.IcnsResolver.IcnsResolverQueryClient(client as any, resolverAddress);
            // const {bech32_address} = await queryClient.addressByIcns({icns: domainName});
            const { bech32_address } = yield client.queryContractSmart(resolverAddress, {
                address_by_icns: {
                    "icns": domainName
                }
            });
            return bech32_address;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getAddressICNS = getAddressICNS;
function getNameICNS(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield cosmwasm_stargate_1.CosmWasmClient.connect("https://rpc.osmosis.zone");
            // const queryClient = new contracts.IcnsResolver.IcnsResolverQueryClient(client as any, resolverAddress);
            // const {bech32_address} = await queryClient.addressByIcns({icns: domainName});
            const { name } = yield client.queryContractSmart(resolverAddress, {
                primary_name: {
                    address
                }
            });
            return name;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getNameICNS = getNameICNS;
