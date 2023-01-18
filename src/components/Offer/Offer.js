import * as React from 'react';
import cn from 'classnames';

import cat from 'assets/images/cat.png';

import "./Offer.scss";

const Offer = ({offer}) => {
    const [isSelected, setSelected] = React.useState(false);

    return <div className={cn("offer", offer.disabled ? 'offer_disabled' : '', isSelected ? 'offer_selected' : '')}
                onClick={() => {
                    if (!offer.disabled) {
                        setSelected(!isSelected);
                    }
                }}>
        <div className="offer__container">
            <img src={cat} alt='cat'/>
            <p className="offer__description">{offer.description}</p>
            <div className="offer-title">
                <span className="offer-title__name">{offer.name}</span>
                <span className="offer-title__type">{offer.type}</span>
            </div>
            <ul className="offer-options">
                {offer.options.map((el, key) => {
                    return <li className="offer-options__element" key={key}>{el}</li>;
                })}
            </ul>
            <div className="offer__weight">{offer.weight}</div>
        </div>
        {
            offer.disabled ? <div className="offer__link">Печалька, {offer.type} закончился</div> :
                isSelected ? <div className="offer__link">{offer.details}</div> :
                    <div className="offer__link">Чего сидишь? Порадуй котэ, <a href='#'>купи.</a></div>
        }
    </div>
}

export default React.memo(Offer);