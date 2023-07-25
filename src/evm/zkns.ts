import { zknsAbi } from "../abi/zkns_abi";
import { ethers } from "ethers";
import { Provider } from "zksync-web3";

const c_address = "0x935442AF47F3dc1c11F006D551E13769F12eab13";

export async function getAddressZKns(domainName: string) {
    try{
        const provider = new Provider("https://mainnet.era.zksync.io");
        const contract = await new ethers.Contract(c_address, zknsAbi, provider);
        const [, domain, topLevelDomain] = domainName.match(/^(.+)\.([^.]+)$/) || [];
        const address = await contract.resolveAddress(domain);
        return address;
    } catch (err) {
        throw err;
    }
}
