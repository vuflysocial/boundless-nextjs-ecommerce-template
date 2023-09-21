import Link from 'next/link';
import logoImg from '../../assets/logo.svg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || 'Miké LLC.';
	return <>
        <div className='page-footer__logo'>
					<Link href='/'>
						<img src={logoImg.src} width={logoImg.width} height={logoImg.height} alt={title} />
					</Link>
        </div>
        <div className='page-footer__company-info'>
            <p className='title'>{title}</p>
        </div>
        <div className='page-footer__disclaimer'>
            <p className='text-muted small'>
                
            </p>
        </div>
    </>;
}