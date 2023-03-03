import {Handlers} from "$fresh/server.ts"; 
import db from '../../util/db.ts'; 

export const handler: Handlers = {
    async GET(){
        const posts = await db.select('post'); 
        return Response.json(posts)
    }
}