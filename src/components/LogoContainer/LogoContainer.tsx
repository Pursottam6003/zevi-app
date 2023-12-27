import { Logo } from '../../assets/images'
import React from 'react'

import styles from "./LogoContainer.module.scss"
const LogoContainer: React.FC = () => {
    return (
        <>
            <div className={styles.home_header}>
                <img src={Logo} alt="" />
            </div>
        </>
    )
}

export default LogoContainer;