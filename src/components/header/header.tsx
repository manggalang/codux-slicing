import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={`container-large ${styles['header-container']}`}>
                <h1 className={styles['logo-text']}>Logo </h1>
                <nav className={styles['header-navigation']}>
                    <a href="/" className={styles['navigation-item']}>
                        Beranda
                    </a>
                    <a href="/service-categories" className={styles['navigation-item']}>
                        Kategori Layanan
                    </a>
                    <a href="/contact" className={styles['navigation-item']}>
                        Kontak
                    </a>
                    <a href="/join-partners" className={styles['navigation-item']}>
                        Gabung Mitra
                    </a>
                    <a href="/login" className={styles['button-primary']}>
                        Masuk
                    </a>
                </nav>
            </div>
        </header>
    );
};
