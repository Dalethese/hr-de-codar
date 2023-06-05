import styles from './Loading.module.css'
import loadingImg from '../../img/loading.svg'

function Loading () {
  return (
    <div className={styles.loader_container}>
      <img src={loadingImg} alt="Loading" className={styles.loading} />
    </div>
  )
}
export default Loading