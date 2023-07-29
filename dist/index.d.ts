import { SupportedChains } from './types';
export interface ProviderUrlsProps {
    eth?: string;
    polygon?: string;
    bnb?: string;
    sui?: string;
}
export declare class SoWsdk {
    constructor(param?: ProviderUrlsProps);
    setProviderUrl(param: ProviderUrlsProps): Promise<void>;
    resolveAddress(domainName: string, ns?: SupportedChains): Promise<any>;
    resolveName(address: string, ns: SupportedChains): Promise<any>;
}
