export async function getAddressAptos(domainName: string) {
    try{
        const response = await fetch(`https://www.aptosnames.com/api/mainnet/v1/address/${domainName}`);
        const {address} = await response.json();
        return address;
    } catch(err) {
        throw err;
    }
}