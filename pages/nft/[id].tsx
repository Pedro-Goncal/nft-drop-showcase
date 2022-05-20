import Image from 'next/image'
import React from 'react'

import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTDropPage = () => {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  console.log(address)

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left Side */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72   "
              src="https://www.cripto-valuta.net/wp-content/uploads/2021/12/FGbZna8VIAAw2j2.png"
              alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">SUUUP APES</h1>
            <h2 className="text-xl text-gray-300">
              A collection of Apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>
      {/* Right Side */}

      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="sm:w80 w-52 cursor-pointer text-xl font-extralight">
            The{' '}
            <span className="font-extrabold underline decoration-fuchsia-600/50">
              Suuup
            </span>{' '}
            NFT Market Place
          </h1>

          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="tx-xs rounded-full bg-fuchsia-700 px-4 py-2 font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-fuchsia-400">
            You're loged in with your wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40 "
            src="https:links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The suuup Ape Coding club
          </h1>

          <p className="pt-2 text-xl text-green-500 ">13 / 21 NFT's claimed</p>
        </div>
        {/* Mint */}
        <button className="mt-10 h-16 w-full rounded-full bg-fuchsia-700 font-bold text-white">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
