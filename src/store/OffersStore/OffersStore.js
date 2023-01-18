import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class OffersStore {
    offers = [];

    constructor() {
        makeObservable(this, {
            offers: observable,
            getOffers: action.bound,
        })
    }

    getOffers(offers) {
        this.offers = offers;
    }

    destroy() {}
}