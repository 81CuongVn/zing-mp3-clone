import classNames from 'classnames/bind';
import styles from './RightSidebar.module.scss';

const cx = classNames.bind(styles);

function RightSidebar() {
    return (
        <div className={cx('wrapper')}>
            <h1>This is right sidebar</h1>
        </div>
    );
}

export default RightSidebar;