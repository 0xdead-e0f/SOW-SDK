import { ENS } from '@ensdomains/ensjs';
import { ethers } from 'ethers';

export async function getAddressENS(domainName:string, providerUrl: string) {
    try{
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        const address = await provider.resolveName(domainName);
        return address;
    } catch (err) {
        throw err;
    }
}