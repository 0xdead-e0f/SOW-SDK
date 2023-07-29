export declare function getAddressSui(domainName: string, fullnode: string): Promise<any>;
/**
   * Returns the default name of the input address if it was set. Otherwise, it will return undefined.
   *
   * @param address a Sui address.
   */
export declare function getNameSui(address: string, fullnode: string): Promise<string | undefined>;
