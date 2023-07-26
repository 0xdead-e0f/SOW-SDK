import { createInstance } from 'dotbit';

const dotbit = createInstance();

export async function getAddressDotBit(domainName: string) {
    const { account_id_hex } = await dotbit.accountInfo(domainName);
    return account_id_hex;
}

export async function getNameDotBit(address: string) {
    const {account} = await dotbit.accountById(address)
    return account;
}