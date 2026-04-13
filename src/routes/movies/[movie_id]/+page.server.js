import db from "$lib/db.js"
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    return {
        test: "test",
        movie: await db.getMovie(params.movie_id)
    }    
}

export const actions = {
    delete: async ({ params }) => {
        await db.deleteMovie(params.movie_id);
        redirect(303, '/movies');
    }
};