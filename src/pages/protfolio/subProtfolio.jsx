import {useParams } from "react-router-dom";

const SubProtfolio = (props) => {
   const {id} = useParams();
   return (
      <h1>{id}</h1>
   )
}
export default SubProtfolio;