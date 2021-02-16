import React from 'react'

import { ButtonLink } from 'lib/components/ButtonLink'
import { SocialCTAs } from 'lib/components/SocialCTAs'

import PoolBlob from 'assets/images/pool-blob@2x.png'
import PrizeIllustration from 'assets/images/prize_transparent.png'

export const DevelopersPage = (props) => {
  return <>
    <div
      className='pool-container mx-auto flex flex-col text-base h-full z-10 relative pt-10 sm:pt-0'
    >
      <h1
        className='text-center text-flashy text-4xl sm:text-7xl lg:text-10xl'
      >
        Build Together
      </h1>

      <h4
        className='mb-12 text-center sm:w-1/2 lg:w-1/3 mx-auto'
      >
        Create your own prize pools and govern the protocol
      </h4>

      <div className='flex flex-col items-center'>
        <ButtonLink
          href='https://docs.pooltogether.com/tutorials/creating-a-prize-pool'
          as='https://docs.pooltogether.com/tutorials/creating-a-prize-pool'
          className='community-button flex items-center underline font-bold mb-7'
        >
          Prize pool builder quick guide
        </ButtonLink>

        <a
          href='https://docs.pooltogether.com'
          as='https://docs.pooltogether.com'
          className='community-button flex items-center underline font-bold'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='feather feather-file-text mr-2'
          >
            <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
            <polyline points='14 2 14 8 20 8'></polyline>
            <line x1='16' y1='13' x2='8' y2='13'></line>
            <line x1='16' y1='17' x2='8' y2='17'></line>
            <polyline points='10 9 9 9 8 9'></polyline>
          </svg> Developer Documentation
        </a>
{/*         
        <div className='mb-4'>
          <ButtonLink
            blue
            secondary
            href='https://discord.gg/hxPhPDW'
            as='https://discord.gg/hxPhPDW'
            className='discord-button flex items-center'
          >
            <svg
              width='19'
              height='21'
              viewBox='0 0 19 21'
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2'
            >
              <path fill='#7289DA' d='M11.1565 8.76562C10.556 8.76562 10.0819 9.28185 10.0819 9.9245C10.0819 10.5671 10.5665 11.0834 11.1565 11.0834C11.757 11.0834 12.2311 10.5671 12.2311 9.9245C12.2311 9.28185 11.7465 8.76562 11.1565 8.76562ZM7.31116 8.76562C6.71066 8.76562 6.23657 9.28185 6.23657 9.9245C6.23657 10.5671 6.72119 11.0834 7.31116 11.0834C7.91167 11.0834 8.38575 10.5671 8.38575 9.9245C8.39628 9.28185 7.91167 8.76562 7.31116 8.76562Z' />
              <path fill='#7289DA' d='M16.2769 0H2.15971C0.969237 0 0 0.969237 0 2.15971V16.2769C0 17.4673 0.969237 18.4366 2.15971 18.4366H14.1066L13.5482 16.5086L14.8967 17.7518L16.1715 18.9212L18.4471 20.8913V2.15971C18.4366 0.969237 17.4673 0 16.2769 0ZM12.2103 13.6431C12.2103 13.6431 11.831 13.19 11.515 12.8002C12.8951 12.4104 13.4218 11.5571 13.4218 11.5571C12.9899 11.8415 12.579 12.0417 12.2103 12.1787C11.6835 12.3999 11.1778 12.5369 10.6827 12.6317C9.6713 12.8213 8.7442 12.7686 7.95406 12.6211C7.35356 12.5053 6.83733 12.3472 6.40539 12.1681C6.16308 12.0733 5.8997 11.9574 5.63632 11.8099C5.60472 11.7889 5.57311 11.7783 5.54151 11.7573C5.52044 11.7467 5.5099 11.7362 5.49937 11.7362C5.30973 11.6308 5.20438 11.5571 5.20438 11.5571C5.20438 11.5571 5.71007 12.3894 7.04804 12.7897C6.73198 13.1901 6.34218 13.6536 6.34218 13.6536C4.0139 13.5799 3.12895 12.0628 3.12895 12.0628C3.12895 8.70206 4.64602 5.97345 4.64602 5.97345C6.16308 4.84618 7.59587 4.87779 7.59587 4.87779L7.70122 5.00421C5.80489 5.54151 4.941 6.37379 4.941 6.37379C4.941 6.37379 5.17277 6.24736 5.56258 6.0788C6.68984 5.58365 7.58533 5.45723 7.95406 5.41508C8.01727 5.40455 8.06995 5.39401 8.13316 5.39401C8.77581 5.30973 9.50274 5.28866 10.2613 5.37294C11.2621 5.48883 12.3367 5.78382 13.4324 6.37379C13.4324 6.37379 12.6001 5.58365 10.8091 5.04635L10.9566 4.87779C10.9566 4.87779 12.3999 4.84618 13.9064 5.97345C13.9064 5.97345 15.4235 8.70206 15.4235 12.0628C15.4235 12.0522 14.5386 13.5693 12.2103 13.6431Z' />
            </svg> Ask on Discord
          </ButtonLink>
        </div> */}
      </div>

      <img src={PrizeIllustration} style={{ maxWidth: 400 }} className='mx-auto my-9' />
    </div>

    <div
      className='bg-developers-art-waves pt-24 lg:pt-64 px-4 sm:px-0'
    >

    </div>

    <div
      className='pool-container mx-auto flex flex-col text-base h-full z-10 relative pt-20 pb-12 lg:pb-0'
    >
      <div className='flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center text-center sm:text-left'>
        <div className='max-w-lg mx-auto mt-10 sm:mt-0'>
          <h2>
            Participate in
            <br/><span className='text-flashy'>Decentralized Governance</span>
          </h2>

          <p className='my-4'>
            Share your ideas, make proposals, and vote. The protocol is solely controlled by the POOL token holders. 
          </p>

          <ButtonLink
            href='https://medium.com/p/23b09f36db48'
            as='https://medium.com/p/23b09f36db48'
            className='items-center underline font-bold my-4'
          >
            Learn more about governance
          </ButtonLink>
        </div>

        <div className='mx-auto'>
          <img src={PoolBlob} className='w-full xs:w-auto max-w-sm mx-auto' />
        </div>

      </div>
    </div>

    <div className='bg-secondary bg-get-involved'>
      <div className='pool-container mx-auto py-16'>

        <div className='flex flex-col items-center rounded-lg p-4 py-12 sm:p-10 bg-overlay'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Stuck, or not sure where to start?
          </h3>

          <div
            className='font-normal w-3/4 xs:w-2/3 sm:w-1/2 lg:w-1/3 text-center text-xs sm:text-sm'
          >
            Join one of our community channels and get support 24/7. 
          </div>

          <SocialCTAs />
        </div>

      </div>
    </div>

  </>
}
