import styles from '@/styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <p>
          Made with ❤️ and 💻 by Pavel Cherkashin.
          <br />
          Exploring the Digital Universe, one code line at a time.
        </p>
        <div className={styles['footer-links']}>
          <a
            href='https://github.com/pcherkashin'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'>
            <FaGithub size={30} />
          </a>
          <a
            href='https://www.linkedin.com/in/pcherkashin/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://twitter.com/pcherkashinx'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'>
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
