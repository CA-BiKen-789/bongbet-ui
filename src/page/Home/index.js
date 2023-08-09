import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Home() {
    const [sizeImageIcon, setSizeImageIcon] = useState(null);
    const [sizeImageSupport, setSizeImageSupport] = useState(null);

    const listLink = [
        {
            urlImage: '/images/facebook_icon.png',
            link: 'https://www.facebook.com/',
            alt: 'Facebook icon'
        },
        {
            urlImage: '/images/youtube_icon.png',
            link: 'https://www.youtube.com/',
            alt: 'Youtube icon'
        },
        {
            urlImage: '/images/telegram_icon.png',
            link: 'https://web.telegram.org/',
            alt: 'Telegram icon'
        },
        {
            urlImage: '/images/download_icon.png',
            link: '#',
            alt: 'Download icon'
        },
    ]

    const listSupportLink = [
        {
            urlImage: '/images/ho_tro_nap_rut.png',
            link: 'https://tawk.to/chat/649821bfcc26a871b0248efc/1h3p47l5r',
            alt: 'Hỗ trợ nạp rút'
        },
        {
            urlImage: '/images/ho_tro_khuyen_mai.png',
            link: 'https://tawk.to/chat/6499407a94cf5d49dc5fd855/1h3ra7oq7',
            alt: 'Hỗ trợ khuyến mãi'
        },
        {
            urlImage: '/images/goi_tong_dai.png',
            link: 'https://tawk.to/chat/649821bfcc26a871b0248efc/1h3p47l5r',
            alt: 'Hỗ trợ tổng đài'
        },
        {
            urlImage: '/images/ho_tro_facebook.png',
            link: 'https://www.facebook.com/ThethaogiaitriBONGBET',
            alt: 'Hỗ trợ facebook'
        },
        {
            urlImage: '/images/ho_tro_khieu_nai.png',
            link: 'https://t.me/khieunaibongbet',
            alt: 'Hỗ trợ khiếu nại'
        },
    ]

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('logo')}>
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className={cx('wrap-banner-content')}>
                    <div className={cx('news-update')}>
                        <img className={cx('title')} src="/images/banner_title.png" alt="banner_title" />
                        <div className={cx('multi-platform')}>
                            <img className={cx('promotion_news')} src="/images/promotion_news.png" alt="promotion_news"></img>
                            <div className={cx('social-layout')}>
                                <div className={cx('social')}>
                                    {listLink.map((item, index) => (
                                        <a key={index} href={item.link}
                                            target="'_blank'">
                                            <img
                                                key={index}
                                                src={item.urlImage}
                                                alt={item.alt}
                                                style={{
                                                    transform: sizeImageIcon === index ? 'scale(1.02)' : 'scale(1)',
                                                    transition: 'transform 0.1s ease-in-out'
                                                }}
                                                onMouseEnter={() => setSizeImageIcon(index)}
                                                onMouseLeave={() => setSizeImageIcon(null)}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('nav')}>
                        {listSupportLink.map((item, index) => (
                            <a key={index} href={item.link}
                                target="'_blank'">
                                <img
                                    key={index}
                                    src={item.urlImage}
                                    alt={item.alt}
                                    style={{
                                        transform: sizeImageSupport === index ? 'scale(1.06)' : 'scale(1)',
                                        transition: 'transform 0.2s ease-in-out'
                                    }}
                                    onMouseEnter={() => setSizeImageSupport(index)}
                                    onMouseLeave={() => setSizeImageSupport(null)}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('content')}>Content</div>
            <div className={cx('footer')}>Footer</div>
        </div>
    );
}

export default Home;