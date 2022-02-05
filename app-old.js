import express from "express";
import * as dotenv from "dotenv";
import colors from "colors"
const app = express();
const env = dotenv.config();
const port =  process.env.PORT;

app.get( '/', function(req, res) {
    res.send('Hola mundo');
});

app.listen( port, () => {
    console.log(`\n==================================`.rainbow);
    console.log(`======Listening on port ${ port }======`.rainbow);
    console.log(`==================================`.rainbow);

})