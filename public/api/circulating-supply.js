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
    const provider = new ethers_1.ethers.providers.JsonRpcProvider('https://api.zan.top/bsc-mainnet');
    const chirpleyContract = new ethers_1.ethers.Contract(process.env.CHIRPLEY_ADDRESS, bep20_json_1.default.abi, provider);
    const supplies = yield Promise.all([
        chirpleyContract.totalSupply(),
        chirpleyContract.balanceOf(process.env.CHIRPLEY_ADDRESS),
        chirpleyContract.balanceOf(process.env.DEAD_ADDRESS),
        chirpleyContract.balanceOf(process.env.ZERO_ADDRESS),
        chirpleyContract.balanceOf(process.env.DEV_ADDRESS),
        chirpleyContract.balanceOf(process.env.TEAM_ADDRESS),
        chirpleyContract.balanceOf(process.env.LIQUIDITY_ADDRESS),
        chirpleyContract.balanceOf(process.env.MARKETING_ADDRESS),
        chirpleyContract.balanceOf(process.env.REWARDS_ADDRESS),
        chirpleyContract.balanceOf(process.env.VESTING1_ADDRESS),
        chirpleyContract.balanceOf(process.env.VESTING2_ADDRESS),
        chirpleyContract.balanceOf(process.env.APESWAP1_ADDRESS),
        chirpleyContract.balanceOf(process.env.APEPAIR_ADDRESS),
        chirpleyContract.balanceOf(process.env.APESWAP_FARM),
        chirpleyContract.balanceOf(process.env.APESWAP_STAKING),
        chirpleyContract.balanceOf(process.env.APESWAP_REWARDS),
        chirpleyContract.balanceOf(process.env.LITHIUM),
        chirpleyContract.balanceOf(process.env.BABY_DOGE_FARM),
        chirpleyContract.balanceOf(process.env.BABY_DOGE_PAIR),
        chirpleyContract.balanceOf(process.env.TOKENFARM),
        chirpleyContract.balanceOf(process.env.TRUSTFIFARM),
        chirpleyContract.balanceOf(process.env.BABYDOGE_BURN1),
        chirpleyContract.balanceOf(process.env.BABYDOGE_BURN2) //V
    ]);
    const [totalSupply, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V] = supplies;
    const circulatingSupply = totalSupply.sub(A).sub(B).sub(C).sub(D).sub(E).sub(F).sub(G).sub(H).sub(I).sub(J).sub(K).sub(L).sub(M).sub(N).sub(O).sub(P).sub(Q).sub(R).sub(S).sub(T).sub(U).sub(V);
    response.status(200).send(ethers_1.ethers.utils.formatUnits(circulatingSupply, 18));
});
