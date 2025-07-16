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
    chirpleyContract.totalSupply(),
	chirpleyContract.balanceOf(process.env.CHIRPLEY_ADDRESS), //A
	chirpleyContract.balanceOf(process.env.DEAD_ADDRESS), //B
	chirpleyContract.balanceOf(process.env.ZERO_ADDRESS), //C
	chirpleyContract.balanceOf(process.env.DEV_ADDRESS), //D
	chirpleyContract.balanceOf(process.env.TEAM_ADDRESS), //E
	chirpleyContract.balanceOf(process.env.LIQUIDITY_ADDRESS), //F
	chirpleyContract.balanceOf(process.env.MARKETING_ADDRESS), //G
	chirpleyContract.balanceOf(process.env.REWARDS_ADDRESS), //H
	chirpleyContract.balanceOf(process.env.VESTING1_ADDRESS), //I
	chirpleyContract.balanceOf(process.env.VESTING2_ADDRESS),	//J   
	chirpleyContract.balanceOf(process.env.APESWAP1_ADDRESS), //K
	chirpleyContract.balanceOf(process.env.APEPAIR_ADDRESS), //L
	chirpleyContract.balanceOf(process.env.APESWAP_FARM), //M
	chirpleyContract.balanceOf(process.env.APESWAP_STAKING), //N
	chirpleyContract.balanceOf(process.env.APESWAP_REWARDS), //O
	chirpleyContract.balanceOf(process.env.LITHIUM), //P	
	chirpleyContract.balanceOf(process.env.BABY_DOGE_FARM), //Q
	chirpleyContract.balanceOf(process.env.BABY_DOGE_PAIR), //R
	chirpleyContract.balanceOf(process.env.TOKENFARM), //S
	chirpleyContract.balanceOf(process.env.TRUSTFIFARM), //T
	chirpleyContract.balanceOf(process.env.BABYDOGE_BURN1), //U
	chirpleyContract.balanceOf(process.env.BABYDOGE_BURN2) //V
  ])

  const [totalSupply,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V] = supplies

  const circulatingSupply = totalSupply.sub(A).sub(B).sub(C).sub(D).sub(E).sub(F).sub(G).sub(H).sub(I).sub(J).sub(K).sub(L).sub(M).sub(N).sub(O).sub(P).sub(Q).sub(R).sub(S).sub(T).sub(U).sub(V)

  response.status(200).send(ethers.utils.formatUnits(circulatingSupply, 18))
}
