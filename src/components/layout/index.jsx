import React from 'react'
import SideBar from "./components/sideBar"
import TopBar from "./components/tobBar"
import TodoApp from '../screens/todo'
import CodeReviewFeedback from '../screens/code-review'

const Layout = () => { //arrow function components this following ES6 standard


    return (
        <>
            <TopBar />
            <SideBar />
            <main className="container-fluid p-4">
                <TodoApp/>
                <CodeReviewFeedback />
            </main>
        </>
    )
}
export default Layout
