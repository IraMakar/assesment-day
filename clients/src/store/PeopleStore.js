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
        makeAutoObservable(this)
    }

    setPeoples(peoples) {
        this._peoples = peoples
    }

    get peoples() {
        return this._peoples
    }
}