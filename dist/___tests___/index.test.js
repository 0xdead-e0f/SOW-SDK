"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const types_1 = require("../types");
describe('testing resolveAddress function', () => {
    const sowsdk = new index_1.SoWsdk({
        eth: "https://rough-autumn-gadget.quiknode.pro/fd6b09de651121334bb6cbb079684a6b8c29e2f9/",
        polygon: "https://blue-morning-moon.matic.quiknode.pro/e94e05dc0f36703a7aaa55c2e8694b59ad920ff3/",
        bnb: "https://tiniest-soft-aura.bsc.quiknode.pro/74216d3d2e033a7c39dff1aa40dd69435d13ea32/"
    });
    test('ENS', () => {
        return sowsdk.resolveAddress("alice.eth").then((address) => {
            expect(address).toBe("0xcd2E72aEBe2A203b84f46DEEC948E6465dB51c75");
        });
    }, 100000);
    test('SpaceID', () => {
        return sowsdk.resolveAddress("nft.bnb").then((address) => {
            expect(address).toBe("0x5242333D36A31f9253d8A360e20e622C635Bd74c");
        });
    }, 100000);
    test('Unstoppable Domain', () => {
        return sowsdk.resolveAddress("sandy.crypto").then((address) => {
            expect(address).toBe("0x94ef5300cbc0aa600a821ccbc561b057e456ab23");
        });
    }, 100000);
    test('DotBit(Das)', () => {
        return sowsdk.resolveAddress("imac.bit").then((address) => {
            expect(address).toBe("0x5728088435fb8788472a9ca601fbc0b9cbea8be3");
        });
    }, 100000);
    test('Zkns (ZkSync)', () => {
        return sowsdk.resolveAddress("ross.zk").then((address) => {
            expect(address).toBe("0xf9473a70724b8f79c3ea108d5cb69d042c9fe76c");
        });
    }, 100000);
    test('ICNS (Osmosis)', () => {
        return sowsdk.resolveAddress("dogemos.osmo").then((address) => {
            expect(address).toBe("osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5");
        });
    }, 100000);
    test('Stargaze Domains (Stargaze Chain)', () => {
        return sowsdk.resolveAddress("nikan.stars").then((address) => {
            expect(address).toBe("stars1e4pzleql4gm6hngv6dfcu5hla0ettrrxm9zlne");
        });
    }, 100000);
    test('Bonfida (Solana)', () => {
        return sowsdk.resolveAddress("🇺🇸.sol").then((address) => {
            expect(address).toBe("CnNHzcp7L4jKiA2Rsca3hZyVwSmoqXaT8wGwzS8WvvB2");
        });
    }, 100000);
    test('Aptos Name Service', () => {
        return sowsdk.resolveAddress("test.apt").then((address) => {
            expect(address).toBe("0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4");
        });
    }, 100000);
    test('Sui Name Service', () => {
        return sowsdk.resolveAddress("coin.sui").then((address) => {
            expect(address).toBe("0xa4c4c40fb38cae294e42bcbf256acea1bbd77d3ea5b21d3cd009b5622e47f392");
        });
    }, 100000);
});
describe('testing resolveName function', () => {
    const sowsdk = new index_1.SoWsdk({
        eth: "https://rough-autumn-gadget.quiknode.pro/fd6b09de651121334bb6cbb079684a6b8c29e2f9/",
        polygon: "https://blue-morning-moon.matic.quiknode.pro/e94e05dc0f36703a7aaa55c2e8694b59ad920ff3/",
        bnb: "https://tiniest-soft-aura.bsc.quiknode.pro/74216d3d2e033a7c39dff1aa40dd69435d13ea32/"
    });
    test('ENS', () => {
        return sowsdk.resolveName("0x5555763613a12D8F3e73be831DFf8598089d3dCa", types_1.SupportedChains.ENS).then((name) => {
            expect(name).toBe("ricmoo.eth");
        });
    }, 100000);
    test('SpaceID', () => {
        return sowsdk.resolveName("0x5242333D36A31f9253d8A360e20e622C635Bd74c", types_1.SupportedChains.SpaceId).then((name) => {
            expect(name).toBe("denali0.bnb");
        });
    }, 100000);
    test('Unstoppable Domain', () => {
        return sowsdk.resolveName("0x94ef5300cbc0aa600a821ccbc561b057e456ab23", types_1.SupportedChains.UnstoppableDomains).then((name) => {
            expect(name).toBe("sandy.nft");
        });
    }, 100000);
    test('DotBit(Das)', () => {
        return sowsdk.resolveName("0x5728088435fb8788472a9ca601fbc0b9cbea8be3", types_1.SupportedChains.DotBit).then((name) => {
            expect(name).toBe("imac.bit");
        });
    }, 100000);
    test('Zkns (ZkSync)', () => {
        return sowsdk.resolveName("0xf9473a70724b8f79c3ea108d5cb69d042c9fe76c", types_1.SupportedChains.Zkns).then((name) => {
            expect(name).toBe("ross.zk");
        });
    }, 100000);
    test('ICNS (Osmosis)', () => {
        return sowsdk.resolveName("osmo1z98eg2ztdp2glyla62629nrlvczg8s7f8sgpm5", types_1.SupportedChains.ICNS).then((name) => {
            expect(name).toBe("dogemos");
        });
    }, 100000);
    test('Stargaze Domains (Stargaze Chain)', () => {
        return sowsdk.resolveName("stars1myec2z2wjpkhmf8tlhkzcjck04w25sc6ymhplz", types_1.SupportedChains.StargazeDomains).then((name) => {
            expect(name).toBe(null);
        });
    }, 100000);
    test('Bonfida (Solana)', () => {
        return sowsdk.resolveName("Crf8hzfthWGbGbLTVCiqRqV5MVnbpHB1L9KQMd6gsinb", types_1.SupportedChains.Bonfida).then((name) => {
            expect(name).toBe("bonfida");
        });
    }, 100000);
    test('Aptos Name Service', () => {
        return sowsdk.resolveName("0xff7d353b9095524e1584479fa87e8af698f75e5b6f38cf1f46bdf0043dfc72e4", types_1.SupportedChains.AptosNs).then((name) => {
            expect(name).toBe("test");
        });
    }, 100000);
    test('Sui Name Service', () => {
        return sowsdk.resolveName("0x175a95aa39e8bb6eecb49692ec6f9705e4bfac24877dee331a00dd15a2012adf", types_1.SupportedChains.AptosNs).then((name) => {
            expect(name).toBe("undefined");
        });
    }, 100000);
});
