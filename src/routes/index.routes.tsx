import {
    BrowserRouter,
    Routes as ContainerRoutes,
    Route,
    Link
} from 'react-router-dom';
import { Home } from '../pages/Home';

export function Routes() {
    return (
        <>
            <BrowserRouter>
                <ContainerRoutes>
                        <Route path='/' element={<Home/>}>
                            
                        </Route>
                </ContainerRoutes>
            </BrowserRouter>
        </>
    )
}