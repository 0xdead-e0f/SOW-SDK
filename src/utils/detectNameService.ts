import { SupportedChains } from '../types';

function getExtensionFromDomain(domainName: String) : String {
    const extension = domainName.split('.').pop();
    if (!extension) 
        return "";
    return extension.toLowerCase();
}
export function detectNameService(domainName: String) : SupportedChains {
    const extension = getExtensionFromDomain(domainName).toLowerCase();
    if (extension === "") {
        return SupportedChains.None;
    }

    switch (extension) {
        case "eth" || "ens":
            return SupportedChains.ENS;
        case "bnb":
            return SupportedChains.SpaceId;
        case "crypto" || "x" || "polygon" || "zil":
            return SupportedChains.UnstoppableDomains;
        case "bit":
            return SupportedChains.DotBit;
        case "era" || "zk":
            return SupportedChains.Zkns;
            
    }
    
    return SupportedChains.None;
}