import {
    BrowserRouter,
    Routes as ContainerRoutes,
    Route,
    Link
} from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { LuckAt } from '../pages/LockAt';
import { MyDocuments } from '../pages/MyDocuments';
import { MyDocumentsUpdate } from '../pages/MyDocuments/Update';

export function Routes() {
    return (
        <>
            <ContainerRoutes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/myDocuments' element={<MyDocuments />}></Route>
                <Route path='/myDocuments/update/:id' element={<MyDocumentsUpdate />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/lockAt/:id' element={<LuckAt />}></Route>
            </ContainerRoutes>
        </>
    )
}