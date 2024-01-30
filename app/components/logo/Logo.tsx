import Image from "next/image";
import Link from "next/link";
import logoImage from 'assets/images/logo.svg';
import s from './Logo.module.scss';
import {FC} from "react";

const Logo: FC = () => {
    return (
        <Link href={'/'} className={s.logo}>
            <Image
                src={logoImage}
                width={220}
                height={34}
                alt={'watchflix'}
                draggable={false}
            />
        </Link>
    );
};

export default Logo;