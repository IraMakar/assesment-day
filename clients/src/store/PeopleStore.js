import { makeAutoObservable } from "mobx"

export default class PeopleStore {
    constructor() {
        // this._peoples = [
        //     {id: 1, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`},
        //     {id: 2, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`},
        //     {id: 3, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`},
        //     {id: 4, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`},
        //     {id: 5, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`},
        //     {id: 6, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`},
        //     {id: 7, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`},
        // ]
        this._peoples = []
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        makeAutoObservable(this)
    }

    setPeoples(peoples) {
        this._peoples = peoples
    }
    setPage(page) {
        //this.setPage(1)//
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get peoples() {
        return this._peoples
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}