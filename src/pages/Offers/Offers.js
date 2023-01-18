import * as React from 'react';
import {observer} from "mobx-react-lite";

import Offer from 'components/Offer';

import "./Offers.scss";

const Offers = ({store}) => {
    const offers = React.useMemo(() => store.offers, [store.offers]);

    return <section className="offers">
        <h1 className="offers__title">Ты сегодня покормил кота?</h1>
        <div className="offers-list">
            {offers.map((el, key) => {
                return <Offer key={key} offer={el}/>;
            })}
        </div>
    </section>
}

export default observer(Offers);