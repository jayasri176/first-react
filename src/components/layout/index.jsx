import SideBar from "./components/sideBar"
import TopBar from "./components/tobBar"

const Layout = () => { //arrow function components this following ES6 standard
    return (
        <>
            <TopBar  />
            <SideBar />
           
            <main className="container-fluid p-4">
             
            </main>
        </>
    )
}
//jsx syntax: html and js and css combiner and written in one file is called JSX, and JSX is follow the markupof html and jsx is used as extension

{/*  /this is multiline comment in react
function Layout(){ //functionaly compoents this is normal js standard
// this is line comment in react
    return(
        <>
          <TopBar/>
          <SideBar/>
          <main className="container" style={{border:'solid red 1px'}}>
          </main>
        </>
    )
}
*/}
export default Layout