import {
    BrowserRouter,
    Routes as ContainerRoutes,
    Route,
    Link
} from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { MyDocuments } from '../pages/MyDocuments';

export function Routes() {
    return (
        <>
            <ContainerRoutes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/myDocuments' element={<MyDocuments />}></Route>
                <Route path='/about' element={<About />}></Route>
            </ContainerRoutes>
        </>
    )
}