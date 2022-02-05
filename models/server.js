import express from "express";
import colors from "colors";
import cors from "cors"
import userRoutes from "../routes/user.routes.js"
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        //* Middlewares
        this.middlewares();

        //* Routes
        this.routes();
    }
    middlewares() {
        //* CORS
        this.app.use( cors() );
        //*Parse and read body
        this.app.use( express.urlencoded( { extended: false}) );
        this.app.use( express.json() );
        //*public path
        this.app.use( express.static('public') );
    }
    routes() {
        this.app.use( this.usersPath, userRoutes);
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log(`\n==================================`.rainbow);
            console.log(`======Listening on port ${ this.port }======`.rainbow);
            console.log(`==================================`.rainbow);
        
        });
    }

}


export default Server;