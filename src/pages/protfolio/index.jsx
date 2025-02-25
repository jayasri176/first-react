import Card from "../../components/comman/cards/card";
import TitleBar from "../../components/comman/titleBar/titleBar";
import styles from "./protfolio.module.css"
const Protfolio = () => {
   const items = [
      {
         label: 'Resume CV Builder',
         description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
         image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*tZi2Ikbo13iyBBe7x-u-UA.png',
         slug: '/resume-cv-builder',
         status: {
            value: 'positive',
            label: "Completed"
         }
      },
      {
         label: 'Analysis the CV',
         description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
         image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*tZi2Ikbo13iyBBe7x-u-UA.png',
         slug: '/analysis-the-cv',
         status: {
            value: 'negative',
            label: "Rejected"
         }
      },
      {
         label: 'Advance Calculator',
         description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
         image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*tZi2Ikbo13iyBBe7x-u-UA.png',
         slug: '/advance-calculator',
         status: {
            value: 'neutral',
            label: "In-Progress"
         }
      }
   ]
   return (
      <>
         <TitleBar title="Protfolio" description="Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box." />
         <div className={styles.protfolioWrapper}>
            {
               items?.map((n, i) => <Card {...n} key={i} />)
            }
         </div>
      </>
   )
}
export default Protfolio;