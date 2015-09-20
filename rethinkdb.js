var r = require('rethinkdb');

var isAllGood = function () {
    return new Promise(function(resolve, reject) {
        r.connect( {host: 'db', port: 28015, authKey: process.env.AUTH_KEY}, function(err, conn) {
            if (err) {
                reject(err);
            }

            r.db('rethinkdb').table('current_issues').count().eq(0)
                .run(conn, function(err, result) {
                    if (err) {
                        reject(err);
                    }

                    resolve(result);
                });
        });
    });
};

module.exports = {
    isAllGood: isAllGood
};
