"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv_1 = __importDefault(require("dotenv"));
const bep20_json_1 = __importDefault(require("../abis/bep20.json"));
dotenv_1.default.config();
exports.default = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc');
    const chirpleyContract = new ethers_1.ethers.Contract(process.env.CHIRPLEY_ADDRESS, bep20_json_1.default.abi, provider);
    const supplies = yield Promise.all([
        chirpleyContract.balanceOf(process.env.CHIRPLEY_ADDRESS),
        chirpleyContract.balanceOf(process.env.DEAD_ADDRESS),
        chirpleyContract.balanceOf(process.env.ZERO_ADDRESS),
        chirpleyContract.balanceOf(process.env.DEV_ADDRESS),
        chirpleyContract.balanceOf(process.env.TREASURY_ADDRESS),
        chirpleyContract.balanceOf(process.env.TEAM_ADDRESS),
        chirpleyContract.balanceOf(process.env.LIQUIDITY_ADDRESS),
        chirpleyContract.balanceOf(process.env.MARKETING_ADDRESS),
        chirpleyContract.balanceOf(process.env.REWARDS_ADDRESS),
        chirpleyContract.balanceOf(process.env.VESTING1_ADDRESS),
        chirpleyContract.balanceOf(process.env.VESTING2_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT1_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT2_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT3_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT4_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT5_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT6_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT7_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT8_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT9_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT10_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT11_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT12_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT13_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT14_ADDRESS),
        chirpleyContract.balanceOf(process.env.GOTBIT15_ADDRESS),
        chirpleyContract.balanceOf(process.env.APESWAP1_ADDRESS),
        chirpleyContract.balanceOf(process.env.APEPAIR_ADDRESS),
        chirpleyContract.balanceOf(process.env.APESWAP_FARM),
        chirpleyContract.balanceOf(process.env.APESWAP_STAKING),
        chirpleyContract.balanceOf(process.env.APESWAP_REWARDS),
        chirpleyContract.balanceOf(process.env.APESWAP_CUSTOM_TREASURY),
        chirpleyContract.balanceOf(process.env.APESWAP_TREASUREBILL),
        chirpleyContract.balanceOf(process.env.GAGARIN_ADDRESS),
        chirpleyContract.balanceOf(process.env.KAIZEN_ADDRESS),
        chirpleyContract.balanceOf(process.env.FANTOM_ADDRESS),
        chirpleyContract.balanceOf(process.env.LITHIUM1_ADDRESS),
        chirpleyContract.balanceOf(process.env.LITHIUM2_ADDRESS),
        chirpleyContract.balanceOf(process.env.UPLIFT2_ADDRESS),
        chirpleyContract.balanceOf(process.env.BABY_DOGE_FARM),
        chirpleyContract.balanceOf(process.env.BABY_DOGE_PAIR),
        chirpleyContract.balanceOf(process.env.TOKENFARM1_ADDRESS),
        chirpleyContract.balanceOf(process.env.TOKENFARM2_ADDRESS),
        chirpleyContract.balanceOf(process.env.TOKENFARM3_ADDRESS) //RR
    ]);
    const [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, BB, CC, DD, EE, FF, GG, HH, II, JJ, KK, LL, MM, NN, OO, PP, QQ, RR] = supplies;
    const controlledSupply = A.add(B).add(C).add(D).add(E).add(F).add(G).add(H).add(I).add(J).add(K).add(L).add(M).add(N).add(O).add(P).add(Q).add(R).add(S).add(T).add(U).add(V).add(W).add(X).add(Y).add(Z).add(AA).add(BB).add(CC).add(DD).add(EE).add(FF).add(GG).add(HH).add(II).add(JJ).add(KK).add(LL).add(MM).add(NN).add(OO).add(PP).add(QQ).add(RR);
    response.status(200).send(ethers_1.ethers.utils.formatUnits(controlledSupply, 18));
});
