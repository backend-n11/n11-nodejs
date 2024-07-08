import { map, Observable, of } from "rxjs"




const observable = new Observable(subscribe => {
    subscribe.next("1")
    subscribe.next("2")
    subscribe.next("3")
    subscribe.next("4")
    subscribe.complete()
})


observable.subscribe({
    next(data) {
        console.log(data)
    },
    error(e) {
        console.error(e)
    },

    complete() {
        console.log("DONE")
    }
})



// of(10, 20, 30)
//     .subscribe({
//         next: value => console.log('next:', value),
//         error: err => console.log('error:', err),
//         complete: () => console.log('the end'),
//     });


const res = of(10, 20, 30).pipe(map(item => {
    return item * 2
}))
console.log(res.subscribe({
            next: value => console.log('next:', value),
        error: err => console.log('error:', err),
        complete: () => console.log('the end'),

}))