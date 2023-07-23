import { createInstance } from 'dotbit';

const dotbit = createInstance();

export async function getAddressDotBit(domainName: string) {
    const { account_id_hex } = await dotbit.accountInfo(domainName);
    return account_id_hex;
}