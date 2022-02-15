import React from 'react'
import arrow from './arrow.svg'
import styles from './index.module.css'

function index({ children, scrollElement }) {
    const scroll = () =>  {
        // console.log(scrollElement.current);
       scrollElement.current.scroll({ left: scrollElement.current.scrollLeft + 200, behavior: 'smooth' })
    }

  return (
    <div className={styles.container}>
            {children}
        <button className={styles.arrow} onClick={scroll}>
            <img src={arrow} alt="scroll" />
        </button>
    </div>
  )
}

export default index