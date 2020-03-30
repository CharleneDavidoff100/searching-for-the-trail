import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Searching For The Trail</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/"></Link>
      </li>
    </ul>
  </nav>
)
