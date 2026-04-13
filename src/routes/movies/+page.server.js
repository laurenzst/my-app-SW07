import db from "$lib/db.js"

export async function load() {
    return {
        test: "test",
        movies: await db.getMovies()
    }    
}