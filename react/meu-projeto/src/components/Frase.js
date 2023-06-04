import styles from './Frase.module.css'

export default function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <h1 className={styles.fraseContent}>frase</h1>
      <p className={styles.fraseContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus minima, perferendis facilis dolore voluptas explicabo nisi nulla distinctio nesciunt ratione iure voluptatem modi, enim consequatur obcaecati exercitationem maiores? Repellendus!</p>
    </div>
  )
}