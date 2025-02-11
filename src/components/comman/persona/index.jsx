import React  from "react";
class Persona extends React.Component{
    constructor(props){
        super(props);
        this.state = {heading:"Welcome Back, JayaSri"}
       
    }
   
    onHandleShowValue=()=>{
        console.log("This--->", this?.props?.subHeading)
        this.setState({heading:''})
        return;
    }



    
    // static getDerivedStateFromProps(props, state){
    //     let value = state
    //     console.log("Value--->", value)
    //     value = ({heading:props?.subHeading})
    //         console.log("2Value--->", value)
    //     console.log("3Value--->", value)
    //     return value
    // }
    // shouldComponentUpdate(){
    //     return true
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log("----->", prevProps, prevState)
    // }
    // componentDidMount(){
    //     console.log("Comm-:", this.state)
    //    setTimeout(()=>{
    //     this.setState({heading:"Hello!"})
    //    }, 5000)
    // }
    // componentDidUpdate(){
    //     console.log("A====>", this.state)
    // }
    render(){
        return(
            <div>
               {this?.state?.heading?<Heading heading={this?.state?.heading}/>:null}
                <button onClick={()=>{this.onHandleShowValue()}}>Delete</button>

                <br/>
            </div>
        )
    }
}
export default Persona;



class Heading extends React.Component{
    constructor(props){
        super()
    }
    componentWillUnmount(){
        console.log("Component Deleted")
    }
    render(){
        return(
            <h1>{this.props?.heading}</h1>
        )
    }
}
// life cycle of class components is divided into 3 phases to monitor class components with the help you monitoring and manuplating any state data
//1. Mounting Phase
{/*
   Putting the element on the DOM (Document Oobject Model) 
    
   4 types of methods

   1. constructor()  when component is inititat the constructor is initialized before the render of component
   2. getDerivedStateFromProps(): this method is also part of mounting phase and is called right before the render method
   3. render()/ this is also method of Mmounting phase and is  called after the getDerivedStateFromProps() method and actuall output of HTMLl return from 
   4. componentDidMount(): this is also method of mounting phase and it called after render; and it able to access supper method properties

*/}



//2. Updating Phase
//updateting phase means update on DEOm and Component with the help state and props

//these is 5 types of methods inside updating phase

//a. getDerivedStateFfromProps() --  
//b. sholudComponentUpdate() -- this be return boolean value to stop to render and updated component  it will be a default true 
//c. render()  -- this render of html or jsx code with new changes
//d. getSnapshotBeforeUpdate() - this method help to preserve previous props and state value
//e. componentDidUpdate() -- when be componentDidMount update the state the componentDidUpdate automatically trigger or call


//3, Unmounting Phase
//when component is removed from DOM or unmount as react we call Uunmounting phase

// this is only one type of method
// a. componentWillUnMount : this method call when any state and props value delete