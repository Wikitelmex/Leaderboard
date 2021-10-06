'use strict';

export class myHttpRequest {
    #url = '';

    constructor (url =''){
        this.#url = url;
    }

    async getAsync() {
        try {
            const response = await fetch(this.#url);
            const obj = await response.json();
            return obj.result;
        } catch (error) {
            console.log('failed because ' + error);
        }
    }

    async postAsync( element = {}) {
        try {
            const response = await fetch(this.#url, {
                method: 'POST',
                body: JSON.stringify(element),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                });
            const obj = await response.json();
            return obj;
        } catch (error) {
            console.log('failed because ' + error);
        }
    }
}

/*
const myHttpvar = new myHttpRequest('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zQeTLB9MkqImEjIEky2O/scores/');
 const y = myHttpvar.post({ 
    user: 'user1',
    score: 66
})

y.then(res => {console.log(res);}); 

const x = myHttpvar.getAsync();
x.then( res =>{console.log(res);});
*/