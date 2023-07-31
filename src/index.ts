import { getAddressDotBit, getNameDotBit } from './evm/dotbit';
import { getAddressENS, getNameENS } from './evm/ens';
import { getAddressResolution, getNameResolution } from './evm/resolution';
import { getAddressSID, getNameSID } from './evm/sid';
import { getAddressZKns, getNameZKns } from './evm/zkns';
import { getAddressAptos, getNameAptos } from './non-evm/aptosns';
import { getAddressICNS, getNameICNS } from './non-evm/icns';
import { getAddressSolana, getNameSolana } from './non-evm/solana';
import { getAddressStargaze, getNameStargaze } from './non-evm/stargaze';
import { getAddressSui, getNameSui } from './non-evm/suins';
import { SupportedChains } from './types';
import { detectNameService } from './utils/detectNameService';

let ethProviderUrl: string = "https://eth.llamarpc.com";
let polygonProviderUrl: string = "https://polygon-rpc.com/";
let bnbProviderUrl: string = "https://rpc.ankr.com/bsc";
let suiProviderUrl: string = "https://sui.getblock.io/3b3d419a-32f2-40f0-a0fc-9a7da31a227c/mainnet/";
export interface ProviderUrlsProps {
    eth?: string,
    polygon?: string,
    bnb?: string,    
    sui?: string,
}

export class SoWsdk {
    constructor (param?: ProviderUrlsProps) {
        ethProviderUrl = param?.eth? param?.eth : ethProviderUrl;
        polygonProviderUrl = param?.polygon? param?.polygon : polygonProviderUrl;
        bnbProviderUrl = param?.bnb? param?.bnb : bnbProviderUrl; 
        suiProviderUrl = param?.sui? param?.sui : suiProviderUrl;
    }
    public async setProviderUrl(param: ProviderUrlsProps) {
        ethProviderUrl = param?.eth? param?.eth : ethProviderUrl;
        polygonProviderUrl = param?.polygon? param?.polygon : polygonProviderUrl;
        bnbProviderUrl = param?.bnb? param?.bnb : bnbProviderUrl; 
        suiProviderUrl = param.sui? param?.sui: suiProviderUrl;
    }

    public async resolveAddress(domainName: string, ns?: SupportedChains) {
        let service:SupportedChains;

        if(ns) {
            service = ns;
        } else {
            service = detectNameService(domainName);
        }

        switch (service) {
            case SupportedChains.ENS:
                return getAddressENS(domainName, ethProviderUrl);
            case SupportedChains.SpaceId:
                return getAddressSID(domainName);
            case SupportedChains.UnstoppableDomains:
                return getAddressResolution(domainName, ethProviderUrl, polygonProviderUrl);
            case SupportedChains.DotBit:
                return getAddressDotBit(domainName);
            case SupportedChains.Zkns:
                return getAddressZKns(domainName);
            case SupportedChains.ICNS:
                return getAddressICNS(domainName);
            case SupportedChains.StargazeDomains:
                return getAddressStargaze(domainName);
            case SupportedChains.Bonfida:
                return getAddressSolana(domainName);
            case SupportedChains.SuiNs:
                return getAddressSui(domainName, suiProviderUrl);
            case SupportedChains.AptosNs:
                return getAddressAptos(domainName);
            default:
                return "Not supported name service";
        }
    }

    public async resolveName(address: string, ns: SupportedChains) {
        switch (ns) {
            case SupportedChains.ENS:
                return getNameENS(address, ethProviderUrl);
            case SupportedChains.SpaceId:
                return getNameSID(address);
            case SupportedChains.UnstoppableDomains:
                return getNameResolution(address, ethProviderUrl, polygonProviderUrl);
            case SupportedChains.DotBit:
                return getNameDotBit(address);
            case SupportedChains.Zkns:
                return getNameZKns(address);
            case SupportedChains.ICNS:
                return getNameICNS(address);
            case SupportedChains.StargazeDomains:
                return getNameStargaze(address);
            case SupportedChains.Bonfida:
                return getNameSolana(address);
            case SupportedChains.AptosNs:
                return getNameAptos(address);
            case SupportedChains.SuiNs:
                return getNameSui(address, suiProviderUrl);
            default:
                return "Not supported name service";
        }
    }
}