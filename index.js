const initialize = function () {
    const algoliasearch = require("algoliasearch");
    const client = algoliasearch("latency", "56f24e4276091e774e8157fe4b8b11f6");
    return index = client.initIndex("movies");
}

const ch2 = function () {
    const util = require("util");
    const index = initialize()
    index
        .search("", { filters: 'genre:"George Takei" AND actors:"Amy Poehler"' })
        .then(({ hits }) => {
            console.log(util.inspect(hits));
        })
        .catch(err => {
            console.log(err);
        });
}

const bonus = function () {
    const util = require("util");
    const index = initialize()
    index
        .search("", { filters: 'genre:crime AND year=2008' })
        .then(({ hits }) => {
            for (var i = 0; i < hits.length; i++) {
                const hit = hits[i];
                console.log(hit.title, hit.score, hit.rating, hit.year);
            }
        })
        .catch(err => {
            console.log(err);
        });
}
//ch2()    
bonus()