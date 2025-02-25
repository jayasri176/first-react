import styles from './pill.module.css';
const StatusPill=({label, value})=>{
   return(
      <label className={`${styles.byDefault} ${styles[value]}`}>{label}</label>
   )
}
export default StatusPill;