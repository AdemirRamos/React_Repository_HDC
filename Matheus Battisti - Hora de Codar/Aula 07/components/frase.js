import styles from './frase.module.css'

export default function Frase() {
    return(
        <div className={styles.frase_container}>
        
            <p className={styles.frase_content}>Este é um componente com uma frase.</p>

        </div>
    )
}
