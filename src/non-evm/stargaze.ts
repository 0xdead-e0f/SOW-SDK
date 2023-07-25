const SGNames=require("sgnames.js");
// import SGNames from "sgnames.js";

export async function getAddressStargaze(domainName: string) {
    try{
        const [, domain, topLevelDomain] = domainName.match(/^(.+)\.([^.]+)$/) || [];
        const {stargazeAddress} = await SGNames.fetchNameInfo(domain);
        return stargazeAddress;
    } catch(err) {
        throw err;
    }

}