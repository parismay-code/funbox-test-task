import * as React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {useLocalStore} from 'utils/hooks/useLocal';

import Offers from "pages/Offers";

import OffersStore from "store/OffersStore";

import routes from "configs/routes";

const App = () => {
    const offersStore = useLocalStore(() => new OffersStore());

    React.useEffect(() => {
        offersStore.getOffers([
            {
                description: 'Сказачное заморское яство',
                name: 'Нямушка',
                type: 'с фуа-гра',
                details: 'Печень утки разварная с артишоками.',
                options: [
                    '10 порций',
                    'мышь в подарок'
                ],
                weight: '0,5',
                disabled: false
            },
            {
                description: 'Сказачное заморское яство',
                name: 'Нямушка',
                type: 'с рыбой',
                details: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                options: [
                    '40 порций',
                    '2 мыши в подарок'
                ],
                weight: '2',
                disabled: false
            },
            {
                description: 'Сказачное заморское яство',
                name: 'Нямушка',
                type: 'с курой',
                details: 'Филе из цыплят с трюфелями в бульоне.',
                options: [
                    '100 порций',
                    '5 мышей в подарок',
                    'заказчик доволен'
                ],
                weight: '5',
                disabled: true
            }
        ]);
    }, []);

    return <BrowserRouter>
        <main className="main">
            <div className="container">
                <Routes>
                    <Route path={routes.offers.index} element={<Offers store={offersStore}/>}/>
                    <Route path="*" element={<Navigate to={routes.offers.index} replace/>}/>
                </Routes>
            </div>
        </main>
    </BrowserRouter>;
}

export default App;
