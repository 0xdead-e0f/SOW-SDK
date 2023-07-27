
import { JsonRpcProvider } from '@mysten/sui.js';
import { SuinsClient } from '@suins/toolkit';
// import {SnsApi, queryForObjects} from '@snsdomains/js';

export async function getAddressSui(domainName: string) {
    try{
        const provider = new JsonRpcProvider();
        const suinsClient = new SuinsClient(provider as any, {
            networkType: 'testnet',
          });
        const address = await suinsClient.getAddress(domainName);
        return address;

        // const objects = await queryForObjects("DEVNET" as any);
        // const provider = new JsonRpcProvider();
        // const api = new SnsApi(provider as any, "DEVNET" as any, objects);
        // const address = await api.domains.getAddress("suins.sui")
        return address;
    } catch (err) {
        throw err;
    }
}