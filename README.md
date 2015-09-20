# rethinkdb-status
Simple NodeJS app to poll a RethinkDB cluster for issues

Save your RethinkDB auth key as an environment variable called AUTH_KEY

Run the container by linking it to one of your servers in the RethinkDB cluster:

docker run -d --link [name-of-your-rethinkdb-container]:db -p 8080:8080 -e "AUTH_KEY=[your-auth-key]" rethinkdb-status
