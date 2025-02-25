import styles from "./titleBar.module.css"
const TitleBar=({title, description=''})=>{
   return(
      <div className={styles.titleBarWrapper}>
         <h1>{title}</h1>
         {description?<p className={styles.description}>{description}</p>:null}
      </div>
   )
}
export default TitleBar;