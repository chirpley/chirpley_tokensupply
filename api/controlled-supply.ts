import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ethers, BigNumber } from 'ethers'
import dotenv from 'dotenv'
import ERC20 from '../abis/bep20.json'

dotenv.config()

export default async (request: VercelRequest, response: VercelResponse) => {
  const provider = new ethers.providers.JsonRpcProvider('https://api.zan.top/bsc-mainnet')

  const chirpleyContract = new ethers.Contract(
    process.env.CHIRPLEY_ADDRESS as string,
    ERC20.abi,
    provider
  )

  const supplies: BigNumber[] = await Promise.all([
	chirpleyContract.balanceOf(process.env.CHIRPLEY_ADDRESS), //A
	chirpleyContract.balanceOf(process.env.DEAD_ADDRESS), //B
	chirpleyContract.balanceOf(process.env.ZERO_ADDRESS), //C
	chirpleyContract.balanceOf(process.env.DEV_ADDRESS), //D
	chirpleyContract.balanceOf(process.env.TREASURY_ADDRESS), //E
	chirpleyContract.balanceOf(process.env.TEAM_ADDRESS), //F
	chirpleyContract.balanceOf(process.env.LIQUIDITY_ADDRESS), //G
	chirpleyContract.balanceOf(process.env.MARKETING_ADDRESS), //H
	chirpleyContract.balanceOf(process.env.REWARDS_ADDRESS), //I
	chirpleyContract.balanceOf(process.env.VESTING1_ADDRESS), //J
	chirpleyContract.balanceOf(process.env.VESTING2_ADDRESS),	//K
	chirpleyContract.balanceOf(process.env.GOTBIT1_ADDRESS), //L
	chirpleyContract.balanceOf(process.env.GOTBIT2_ADDRESS),	//M
	chirpleyContract.balanceOf(process.env.GOTBIT3_ADDRESS), //N
	chirpleyContract.balanceOf(process.env.GOTBIT4_ADDRESS), //O
	chirpleyContract.balanceOf(process.env.GOTBIT5_ADDRESS), //P
	chirpleyContract.balanceOf(process.env.GOTBIT6_ADDRESS), //Q
	chirpleyContract.balanceOf(process.env.GOTBIT7_ADDRESS), //R
	chirpleyContract.balanceOf(process.env.GOTBIT8_ADDRESS), //S
	chirpleyContract.balanceOf(process.env.GOTBIT9_ADDRESS), //T
	chirpleyContract.balanceOf(process.env.GOTBIT10_ADDRESS), //U
	chirpleyContract.balanceOf(process.env.GOTBIT11_ADDRESS), //V
	chirpleyContract.balanceOf(process.env.GOTBIT12_ADDRESS), //W
	chirpleyContract.balanceOf(process.env.GOTBIT13_ADDRESS), //X
	chirpleyContract.balanceOf(process.env.GOTBIT14_ADDRESS), //Y
	chirpleyContract.balanceOf(process.env.GOTBIT15_ADDRESS), //Z    
	chirpleyContract.balanceOf(process.env.APESWAP1_ADDRESS), //AA
	chirpleyContract.balanceOf(process.env.APEPAIR_ADDRESS), //BB
	chirpleyContract.balanceOf(process.env.APESWAP_FARM), //CC
	chirpleyContract.balanceOf(process.env.APESWAP_STAKING), //DD
	chirpleyContract.balanceOf(process.env.APESWAP_REWARDS), //EE
	chirpleyContract.balanceOf(process.env.APESWAP_CUSTOM_TREASURY), //FF
	chirpleyContract.balanceOf(process.env.APESWAP_TREASUREBILL), //GG
	chirpleyContract.balanceOf(process.env.GAGARIN_ADDRESS), //HH
	chirpleyContract.balanceOf(process.env.KAIZEN_ADDRESS), //II
	chirpleyContract.balanceOf(process.env.FANTOM_ADDRESS), //JJ
	chirpleyContract.balanceOf(process.env.LITHIUM1_ADDRESS), //KK  
	chirpleyContract.balanceOf(process.env.LITHIUM2_ADDRESS), //LL
	chirpleyContract.balanceOf(process.env.UPLIFT2_ADDRESS), //MM
	chirpleyContract.balanceOf(process.env.BABY_DOGE_FARM), //NN
	chirpleyContract.balanceOf(process.env.BABY_DOGE_PAIR), //OO
	chirpleyContract.balanceOf(process.env.TOKENFARM1_ADDRESS), //PP
	chirpleyContract.balanceOf(process.env.TOKENFARM2_ADDRESS), //QQ
	chirpleyContract.balanceOf(process.env.TOKENFARM3_ADDRESS) //RR
  ])

  const [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,BB,CC,DD,EE,FF,GG,HH,II,JJ,KK,LL,MM,NN,OO,PP,QQ,RR] = supplies

  const controlledSupply = A.add(B).add(C).add(D).add(E).add(F).add(G).add(H).add(I).add(J).add(K).add(L).add(M).add(N).add(O).add(P).add(Q).add(R).add(S).add(T).add(U).add(V).add(W).add(X).add(Y).add(Z).add(AA).add(BB).add(CC).add(DD).add(EE).add(FF).add(GG).add(HH).add(II).add(JJ).add(KK).add(LL).add(MM).add(NN).add(OO).add(PP).add(QQ).add(RR)

  response.status(200).send(ethers.utils.formatUnits(controlledSupply, 18))
}
