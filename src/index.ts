import { getAddressDotBit } from './evm/dotbit';
import { getAddressENS } from './evm/ens';
import { getAddressResolution } from './evm/resolution';
import { getAddressSID } from './evm/sid';
import { getAddressZKns } from './evm/zkns';
import { SupportedChains } from './types';
import { detectNameService } from './utils/detectNameService';

let ethProviderUrl: string = "";
let polygonProviderUrl: string = "";
let bnbProviderUrl: string = "";

export interface ProviderUrlsProps {
    eth?: string,
    polygon?: string,
    bnb?: string,    
}

export class SoWsdk {
    constructor (param: ProviderUrlsProps) {
        ethProviderUrl = param.eth!;
        polygonProviderUrl = param.polygon!;
        bnbProviderUrl = param.bnb!; 
    }
    public async setProviderUrl(param: ProviderUrlsProps) {
        ethProviderUrl = param.eth!;
        polygonProviderUrl = param.polygon!;
        bnbProviderUrl = param.bnb!;    
    }

    public async resolveAddress(domainName: string) {
        let service = detectNameService(domainName);

        switch (service) {
            case SupportedChains.ENS:
                return getAddressENS(domainName, ethProviderUrl);
            case SupportedChains.SpaceId:
                return getAddressSID(domainName, "");
            case SupportedChains.UnstoppableDomains:
                return getAddressResolution(domainName, ethProviderUrl, polygonProviderUrl);
            case SupportedChains.DotBit:
                return getAddressDotBit(domainName);
            case SupportedChains.Zkns:
                return getAddressZKns(domainName);
            default:
                return "Not supported name service";
        }
    }
}