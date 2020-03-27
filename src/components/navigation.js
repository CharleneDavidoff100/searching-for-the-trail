iimport React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'


export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Searching for the Trail</Link>
      </li>
     </ul>
  </nav>
)

