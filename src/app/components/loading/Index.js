import Image from "next/image";
import logo from '../../../../public/icons/logo.svg';

export const Loading = () => {
    return (
        <div className="loader">
            <div className="notice notice--animated" style={{ '--horizontal': '50%', '--vertical': '48%', '--width': '0%', '--height': '0%' }}>
                <div className="notice__wrapper">
                    <div className="loader-animation-logo logo--dark logo--animated">
                        <Image
                            src={logo}
                            width={32}
                            height={17}
                            className="logo__svg"
                        />
                    </div>
                    <span className="notice__label labor">
                        <span className="text-splitter text-splitter--splitted">
                            <div className="anim-line" style={{ display: 'block', textAlign: 'start', position: 'relative', transitionDelay: '1s' }}>
                                Loading <span className="anim-line-percentage">0%</span>
                            </div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}