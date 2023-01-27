import styles from './Header.module.scss';

export default function Header({ children }) {
  return (
    <section className={styles.header}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.row}>
          {children}      
        </div>
      </div>
    </section>
  )
}