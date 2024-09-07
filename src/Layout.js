// import React from 'react'
// import { Link,Outlet} from 'react-router-dom'

// const PostLayout = () => {
//   return (
//     <>
//     <Link to="/postpage/1">Post1</Link>
//     <br />
//     <Link to="/postpage/2">Post2</Link>
//     <br />
//     <Link to="/postpage/3">Post3</Link>
//     <br />
//     <Link to ="/postpage/newpost">Newpost</Link>
//     <Outlet/>
//     </>
//   )
// }

// export default PostLayout
//---------------------------------------------------------
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
