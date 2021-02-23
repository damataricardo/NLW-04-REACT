import styles from '../styles/components/Profile.module.css';

export function Profile (){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/damataricardo.png" alt="Ricardo Rodrigues"/>
        
        <div>
            <strong>Ricardo Rodrigues</strong>
            
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1
                </p>
        </div>
        </div>
        
    )
}