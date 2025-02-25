import { Link } from 'react-router-dom';
import StatusPill from '../statusPill';
import styles from './card.module.css';
const Card=({label, description, image, slug, status})=>{
   return(
      <Link to={`/protfolio${slug}`} className={styles.cardWrapper}>
           <div className={styles.cardBox}>
               <div className={styles.cardImageBox}>
                  <img src={image} alt={label} className={'img-fluid '+ styles.image}/>
               </div>
               <div className={styles.cardContextBox}>
                  <StatusPill value={status?.value} label={status?.label}/>
                  <h2 className={styles.cardContextHeading}>{label}</h2>
                  <p className={styles.cardContextPara}>{description}</p>
               </div>
           </div>
      </Link>
   )
}
export default Card;