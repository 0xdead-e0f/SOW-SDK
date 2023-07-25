import { getAddressDotBit } from './evm/dotbit';
import { getAddressENS } from './evm/ens';
import { getAddressResolution } from './evm/resolution';
import { getAddressSID } from './evm/sid';
import { getAddressZKns } from './evm/zkns';
import { getAddressAptos } from './non-evm/aptosns';
import { getAddressICNS } from './non-evm/icns';
import { getAddressSolana } from './non-evm/solana';
import { getAddressStargaze } from './non-evm/stargaze';
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
            case SupportedChains.ICNS:
                return getAddressICNS(domainName);
            case SupportedChains.StargazeDomains:
                return getAddressStargaze(domainName);
            case SupportedChains.Bonfida:
                return getAddressSolana(domainName);
            case SupportedChains.AptosNs:
                return getAddressAptos(domainName);
            default:
                return "Not supported name service";
        }
    }
}