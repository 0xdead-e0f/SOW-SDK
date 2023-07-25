import { resolve } from "@bonfida/spl-name-service/dist";
import { clusterApiUrl, Connection } from "@solana/web3.js";

export async function getAddressSolana(domainName:string) {
    try{
        const connection = new Connection(clusterApiUrl("mainnet-beta"));
        const address = await resolve(connection, domainName);
        return address.toBase58();
    } catch(err) {
        throw err;
    }

}
