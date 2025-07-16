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
		chirpleyContract.balanceOf(process.env.DEAD_ADDRESS), //A
		chirpleyContract.balanceOf(process.env.ZERO_ADDRESS), //B
		chirpleyContract.balanceOf(process.env.BABYDOGE_BURN1), //C
		chirpleyContract.balanceOf(process.env.BABYDOGE_BURN2) //D
	])
	
	const [tSupply,A,B,C,D] = supplies
	const totalSupply = tSupply.sub(A).sub(B).sub(C).sub(D)

  response.status(200).send(ethers.utils.formatUnits(totalSupply, 18))
}
