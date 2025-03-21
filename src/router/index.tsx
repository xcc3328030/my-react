import { Suspense }  from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
import routes from './routes.tsx'
import { Mask } from 'antd-mobile'

const Element = function Element(props) {
    const { component: Component } = props;
    const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();


    return <Component navigate={navigate} 
        location={location} 
        params={params} 
        usp={usp} />;
}

export default function RouterView() {
    return <Suspense fallback={ <Mask visible={true} onMaskClick={() =>{}} opacity='thick' />}>
        <Routes>
            {
                routes.map((item) => {
                    const { name, path } = item;
                    return <Route key={name} path={ path } element={<Element {...item} />}></Route>
                })
            }
        </Routes>
    </Suspense>
}