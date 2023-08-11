import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('wrapper-footer')}>
                <div className={cx('info-support')}>
                    <img src="/images/logo_footer.png" alt="Logo" />
                    <div className={cx('copyright')}>
                        <img src="/images/copyright.png" alt="Bản quyền" />
                        <span>BONGBET mảng game online của nhà cái M.A.N. Bao gồm các trò chơi trực tuyến baccarat,
                            rồng hổ, xì dách, game nổ hủ, bắn cá, xóc dĩa, thể thao điện tử...</span>
                    </div>
                    <div className={cx('contact-support')}>
                        <h1>Trung tâm trợ giúp</h1>
                        <span>Liên hệ BONGBET
                            Đại lý
                            Chính sách và bảo mật
                            Điều khoản điều kiện
                            Câu hỏi thường gặp
                            Miễn trách nhiệm
                            Chơi có trách nhiệm</span>
                    </div>
                </div>
                <div className={cx('partner')}>
                    <img src="/images/partner.png" alt="Đối tác" />
                </div>
            </div>
        </div >
    );
}

export default Footer;