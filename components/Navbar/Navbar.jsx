import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_start}>
        <Link href="/">
          <a className={styles.navbar_item}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.navbar_item}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navbar_item}>Contact</a>
        </Link>
      </div>
      <div className={styles.navbar_center}>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Search"
          />
          <button className={styles.search_button}>
            <Image src={'/public/search_icon.svg'} width={20} height={20} />
          </button>
        </div>
      </div>
      <div className={styles.navbar_end}>
        <Link href="/login">
          <a className={styles.navbar_item}>Login</a>
        </Link>
        <Link href="/signup">
          <a className={styles.navbar_item}>Signup</a>
        </Link>
      </div>
    </nav>
  )
}
