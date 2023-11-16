import { getCosmWasmClient } from '@sei-js/core';
const { SigningCosmWasmClient } = require('@cosmjs/cosmwasm-stargate');

const RPC_URL: string = 'https://rpc.atlantic-2.seinetwork.io/';
const CONTRACT_REGISTRY: string = 'sei1vcap3eeztjle3qy8cl50e80qy9anpr8njkasa66g9dk34l0jtrls7huhv7';
const CONTRACT_REGISTRAR: string = 'sei1ywtz0ug9syuy9mg00ce93ake4j84f0y6lshc8cxdq2czuyav895qf0mmqy';
const CONTRACT_RESOLVER: string = 'sei1a74yars3jdanxj2myukt9vfmrk65p2a88jj3axdl9g6pulhgf84sqqqjas';
const CONTRACT_REVERSE_REGISTRAR: string =
  'sei1cmmfxy0n97s87cfxxran2xkmfl3cmm3fq6wrj3vy8hpgxyn80d9q3d55kk';
const CONTRACT_CONTROLLER: string =
  'sei12p2mwewadmf46zmulydyuphdrsxlss6j924ef7wppylaa2g5eypsg403f3';

export async function getAddressSeiNS(domainName: string, fullNode: string) {
  try {
    const cosmWasmClient = await getCosmWasmClient(fullNode ? fullNode : RPC_URL);

    // Create the query msg json
    const queryMsg = {
      get_record: {
        name: domainName,
      },
    };
    console.log(domainName);
    // Query a smart contract state
    const queryResponse = await cosmWasmClient.queryContractSmart(CONTRACT_REGISTRY, queryMsg);
    console.log(queryResponse);
    return queryResponse.resolver;
  } catch (err) {
    throw err;
  }
}

export async function getNameSeiNS(address: string, fullNode: string) {
  try {
    const cosmWasmClient = await getCosmWasmClient(fullNode ? fullNode : RPC_URL);

    // get node hash
    const queryNodeHash = {
      get_nodehash: {
        name: address, // + ".addr.reverse",
      },
    };
    console.log(address + '.addr.reverse');

    const nodeHash = await cosmWasmClient.queryContractSmart(CONTRACT_CONTROLLER, queryNodeHash);
    console.log(nodeHash);

    // get resolve name
    // const queryMsg = {
    //   get_reverse_record: {
    //     node: nodeHash,
    //   },
    // };

    const queryMsg = `{
      "get_reverse_record": {
        "node": [
          106,
          66,
          60,
          181,
          247,
          147,
          87,
          233,
          33,
          13,
          169,
          159,
          240,
          51,
          130,
          10,
          0,
          93,
          108,
          97,
          107,
          25,
          101,
          46,
          85,
          163,
          124,
          209,
          1,
          210,
          95,
          170
        ]
      }
    }`;

    const client = await SigningCosmWasmClient.connect(RPC_URL);
    const queryResult = await client.queryContractSmart(
      CONTRACT_REVERSE_REGISTRAR,
      JSON.parse(queryMsg)
    );
    console.log(queryResult);

    // const json = JSON.stringify(queryMsg);
    // console.log(JSON.parse(json));
    // const queryResult = await cosmWasmClient.queryContractSmart(CONTRACT_REVERSE_REGISTRAR, JSON.parse(queryMsg));
    // console.log(queryResult);
    return queryResult;
  } catch (err) {
    throw err;
  }
}
