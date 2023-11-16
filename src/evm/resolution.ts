import { Resolution } from '@unstoppabledomains/resolution';

export async function getAddressResolution(
  domainName: string,
  endpointUrl: string,
  ethProviderUrl: string,
  polygonProviderUrl: string,
  apiKey: string
) {
  try {
    const query = new URLSearchParams({ $expand: 'records' }).toString();
    const resp = await fetch(`${endpointUrl}/partner/v3/domains/${domainName}?${query}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const results = await resp.json();
    console.log(results);
    return results.records['crypto.ETH.address'];
  } catch (err) {
    console.log('unstoppable error', err);
    throw err;
  }
}

export async function getNameResolution(
  address: string,
  endpointUrl: string,
  ethProviderUrl: string,
  polygonProviderUrl: string,
  apiKey: string
) {
  try {
    const resp = await fetch(`${endpointUrl}/resolve/reverse/${address}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await resp.json();
    console.log(data);
    return data.meta.domain;
  } catch (err) {
    throw err;
  }
}
