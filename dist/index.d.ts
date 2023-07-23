export interface ProviderUrlsProps {
    eth?: string;
    polygon?: string;
    bnb?: string;
}
export declare class SoWsdk {
    constructor(param: ProviderUrlsProps);
    setProviderUrl(param: ProviderUrlsProps): Promise<void>;
    resolveAddress(domainName: string): Promise<any>;
}
