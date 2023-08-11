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
            <div className={cx('content')}>
                <div className={cx('wrapper-content')}>
                    <div className={cx('connect')}>
                        <div className={cx('title')}>
                            <img src="/images/title_connect.png" alt="Các đường truyền tốc độ cao" />
                        </div>
                        <ul className={cx('connect-point')}>
                            <li className={cx('connect-point_item')}>
                                <a href="/">Cần Thơ</a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/">Đà Nẵng</a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/">Hồ Chí Minh</a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/">Phú Quốc</a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/">Nha Trang</a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/">Hà Nội</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('contact')}>
                        <img src="/images/contact.png" alt="Liên hệ" />
                    </div>
                    <div className={cx('detail-bongbet')}>
                        <div className={cx('question-answer')}>
                            <h1>hỏi đáp về bongbet</h1>
                            <p>Dưới đây là một vài câu hỏi của người chơi được chúng tôi tổng hợp lại.
                                Nếu có bất kỳ thắc mắc sẽ được giải đáp chi tiết nhất.</p>
                        </div>
                        <button>xem chi tiết</button>
                        <div className={cx('conclusion')}>
                            <h1>KẾT LUẬN</h1>
                            <p>Những điều bạn cần hiểu và biết về nhà cái <span>BONGBET</span> đã được đề cập khá cụ thể.
                                Đây là một nhà cái cực kỳ uy tín và an toàn cho người chơi cá cược.
                                Nhanh tay đăng ký ngay một tài khoản để chơi ngay nào!!!</p>
                        </div>
                        <div className={cx('register')}>
                            <h1>ĐĂNG KÝ</h1>
                            <p>Các bạn hãy truy cập ngay vào link <span>BONGBET</span>
                                Đăng ký ngay cho mình một tài khoản để thỏa sức đam mê mình nhé</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>Footer</div>
        </div>
    );
}

export default Home;