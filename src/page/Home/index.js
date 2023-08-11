import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "~/components/Banner";

const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx('wrapper')}>
            <Banner />
            <div className={cx('content')}>
                <div className={cx('wrapper-content')}>
                    <div className={cx('connect')}>
                        <div className={cx('connect-title')}>
                            <img src="/images/title_connect.png" alt="Các đường truyền tốc độ cao" />
                        </div>
                        <ul className={cx('connect-point')}>
                            <li className={cx('connect-point_item')}>
                                <a href="/"><span>Cần Thơ</span></a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/"><span>Đà Nẵng</span></a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/"><span>Hồ Chí Minh</span></a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/"><span>Phú Quốc</span></a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/"><span>Nha Trang</span></a>
                            </li>
                            <li className={cx('connect-point_item')}>
                                <a href="/"><span>Hà Nội</span></a>
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
                            <a href="/">xem chi tiết</a>
                        </div>
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