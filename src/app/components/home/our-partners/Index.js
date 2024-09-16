import Image from "next/image";

// Partners Import
import FileCoin from '../../../../../public/new-home-assets/icons/filecoin.svg';
import Arweave from '../../../../../public/new-home-assets/icons/arweave.svg';
import AWS from '../../../../../public/new-home-assets/icons/aws.svg';
import Azure from '../../../../../public/new-home-assets/icons/azure.svg';
import Sia from '../../../../../public/new-home-assets/icons/sia.svg';
import Storj from '../../../../../public/new-home-assets/icons/storj.svg';
import Cloudskye from '../../../../../public/new-home-assets/icons/cloudskye.svg';
import Bloczio from '../../../../../public/new-home-assets/icons/bloczio.svg';
import Marquee from "react-fast-marquee";


export const OurPartners = () => {

    const partners = [
        {
            partnerName: 'Sia',
            partnerIcon: Sia,
            width: 90,
            height: 46
        },
        {
            partnerName: 'Arweave',
            partnerIcon: Arweave,
            width: 156,
            height: 34
        },
        {
            partnerName: 'Storj',
            partnerIcon: Storj,
            width: 113,
            height: 44
        },
        {
            partnerName: 'AWS',
            partnerIcon: AWS,
            width: 51,
            height: 30
        },
        {
            partnerName: 'Azure',
            partnerIcon: Azure,
            width: 120,
            height: 34
        },
        {
            partnerName: 'Cloudskye',
            partnerIcon: Cloudskye,
            width: 88,
            height: 53
        },
        {
            partnerName: 'Bloczio',
            partnerIcon: Bloczio,
            width: 130,
            height: 16
        },
        {
            partnerName: 'FileCoin',
            partnerIcon: FileCoin,
            width: 130,
            height: 16
        },
    ]

    return (
        <div className="2xl:px-10 md:px-5 px-0 2xl:py-16 py-8">
            <div className="lg:grid grid-cols-12 justify-center items-center">
                <div className="xl:col-span-2 lg:col-span-3 lg:mb-0 md:mb-10 mb-5">
                    <h4 className="bg-green capitalize text-black text-2xl inline px-0.2">
                    //Our partners:
                    </h4>
                </div>
                <div className="xl:col-span-10 lg:col-span-9 overflow-hidden">
                    <div className="flex justify-center items-center xs:forced-full-width sm:forced-full-width">
                        {/* <Marquee direction="left" pauseOnHover={true} > */}

                        {partners.map((partner, index) => (
                            <div className="px-10">
                                <Image
                                    key={index}
                                    src={partner.partnerIcon}
                                    alt={`${partner.partnerName} icon`}
                                    width={partner.width}
                                    height={partner.height}
                                />
                            </div>
                        ))}
                        {/* </Marquee>   */}
                    </div>
                </div>
            </div>
        </div>
    )
}