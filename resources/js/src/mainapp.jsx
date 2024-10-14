import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Link,Routes ,Route} from 'react-router-dom';
import PublicApp from './containers/App/Index'
import Login from './containers/AuthContainer'


export default function MainApp (){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<PublicApp />} />
                    <Route path='/login' element={<Login />} />
                    {/* <Route path='/dashboard/*' element={<Dashboard />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('app')).render(<MainApp/>);



   