import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import  routes from "./routes";

const AppRouter = () =>{

    return (
        <Suspense fallback={<span> loading.... </span>} >
         <Router>
            <Routes>
                {
                    routes.map((item , i) =>(
                    <Route key={i}
                        path={item.path}
                        exact={item.exact}
                        element={<item.component />} /> 
                    ))
                }
            </Routes>
        </Router>
        </Suspense>
    )
}


export default AppRouter ;