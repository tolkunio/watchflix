import Image from "next/image";
import Link from "next/link";
import logoImage from 'assets/images/logo.svg';
import {FC} from "react";

const Logo: FC = () => {
    return (
        <Link href={'/'} className='px-layout mb-10 block'>
            <Image
                src={logoImage}
                width={247}
                height={34}
                alt={'watchflix'}
                draggable={false}
            />
        </Link>
    );
};

export default Logo;