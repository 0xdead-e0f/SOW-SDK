import { SoWsdk } from '../index';
import { SupportedChains } from '../types';

describe('testing resolveAddress function', ()=>{
    const sowsdk = new SoWsdk({
        eth: "https://rough-autumn-gadget.quiknode.pro/fd6b09de651121334bb6cbb079684a6b8c29e2f9/",
        polygon: "https://blue-morning-moon.matic.quiknode.pro/e94e05dc0f36703a7aaa55c2e8694b59ad920ff3/",
        bnb: "https://tiniest-soft-aura.bsc.quiknode.pro/74216d3d2e033a7c39dff1aa40dd69435d13ea32/"
    });

    test('ENS', ()=>{
        return sowsdk.resolveAddress("alice.eth").then((address: string)=>{
            expect(address).toBe("0xcd2E72aEBe2A203b84f46DEEC948E6465dB51c75");
        });
    }, 100000)

    test('SpaceID', ()=>{
        return sowsdk.resolveAddress("nft.bnb").then((address: string)=>{
            expect(address).toBe("0x5242333D36A31f9253d8A360e20e622C635Bd74c");
        })
    }, 100000);

    test('Unstoppable Domain', ()=>{
        return sowsdk.resolveAddress("sandy.crypto").then((address: string)=>{
            expect(address).toBe("0x94ef5300cbc0aa600a821ccbc561b057e456ab23");
        });
    }, 100000)

    test('DotBit(Das)', ()=>{
        return sowsdk.resolveAddress("imac.bit").then((address: string)=>{
            expect(address).toBe("0x5728088435fb8788472a9ca601fbc0b9cbea8be3");
        });
    }, 100000)

    test('Zkns (ZkSync)', ()=>{
        return sowsdk.resolveAddress("ross.zk").then((address: string)=>{
            expect(address).toBe("0xf9473a70724b8f79c3ea108d5cb69d042c9fe76c");
        });
    }, 100000)

    test('ICNS (Osmosis)', ()=>{
        return sowsdk.resolveAddress("dogemos.osmo").then((address: string)=>{
            expect(address).toBe("osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5");
        });
    }, 100000)

    test('Stargaze Domains (Stargaze Chain)', ()=>{
        return sowsdk.resolveAddress("nikan.stars").then((address: string)=>{
            expect(address).toBe("stars1e4pzleql4gm6hngv6dfcu5hla0ettrrxm9zlne");
        });
    }, 100000)

    test('Bonfida (Solana)', ()=>{
        return sowsdk.resolveAddress("🇺🇸.sol").then((address: string)=>{
            expect(address).toBe("CnNHzcp7L4jKiA2Rsca3hZyVwSmoqXaT8wGwzS8WvvB2");
        });
    }, 100000)

    test('Aptos Name Service', ()=>{
        return sowsdk.resolveAddress("test.apt").then((address: string)=>{
            expect(address).toBe("0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4");
        });
    }, 100000)
});

describe('testing resolveName function', ()=>{
    const sowsdk = new SoWsdk({
        eth: "https://rough-autumn-gadget.quiknode.pro/fd6b09de651121334bb6cbb079684a6b8c29e2f9/",
        polygon: "https://blue-morning-moon.matic.quiknode.pro/e94e05dc0f36703a7aaa55c2e8694b59ad920ff3/",
        bnb: "https://tiniest-soft-aura.bsc.quiknode.pro/74216d3d2e033a7c39dff1aa40dd69435d13ea32/"
    });

    test('ENS', ()=>{
        return sowsdk.resolveName("0x5555763613a12D8F3e73be831DFf8598089d3dCa", SupportedChains.ENS).then((name: string)=>{
            expect(name).toBe("ricmoo.eth");
        });
    }, 100000)

    test('SpaceID', ()=>{
        return sowsdk.resolveName("0x5242333D36A31f9253d8A360e20e622C635Bd74c", SupportedChains.SpaceId).then((name: string)=>{
            expect(name).toBe("denali0.bnb");
        })
    }, 100000);

    test('Unstoppable Domain', ()=>{
        return sowsdk.resolveName("0x94ef5300cbc0aa600a821ccbc561b057e456ab23", SupportedChains.UnstoppableDomains).then((name: string)=>{
            expect(name).toBe("sandy.nft");
        })
    }, 100000);

    test('DotBit(Das)', ()=>{
        return sowsdk.resolveName("0x5728088435fb8788472a9ca601fbc0b9cbea8be3", SupportedChains.DotBit).then((name: string)=>{
            expect(name).toBe("imac.bit");
        })
    }, 100000);

    test('Zkns (ZkSync)', ()=>{
        return sowsdk.resolveName("0xf9473a70724b8f79c3ea108d5cb69d042c9fe76c", SupportedChains.Zkns).then((name: string)=>{
            expect(name).toBe("ross.zk");
        })
    }, 100000);

    test('ICNS (Osmosis)', ()=>{
        return sowsdk.resolveName("osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5", SupportedChains.ICNS).then((name: string)=>{
            expect(name).toBe("dogemos");
        })
    }, 100000);

    test('Stargaze Domains (Stargaze Chain)', ()=>{
        return sowsdk.resolveName("stars1myec2z2wjpkhmf8tlhkzcjck04w25sc6ymhplz", SupportedChains.StargazeDomains).then((name: string)=>{
            expect(name).toBe(null);
        })
    }, 100000);

    test('Bonfida (Solana)', ()=>{
        return sowsdk.resolveName("Crf8hzfthWGbGbLTVCiqRqV5MVnbpHB1L9KQMd6gsinb", SupportedChains.Bonfida).then((name: string)=>{
            expect(name).toBe("bonfida");
        })
    }, 100000);

    test('Aptos Name Service', ()=>{
        return sowsdk.resolveName("0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4", SupportedChains.AptosNs).then((name: string)=>{
            expect(name).toBe("test");
        })
    }, 100000);
});