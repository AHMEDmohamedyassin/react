import { AllMovies } from "../type/movieType";

export const AllMoviesAction = (page = 1) => {
    return async (dispatch) => {
        const req = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&region=eg&language=ar&include_image_language=ar&page=1&api_key=5bf0ec2ef3a4841cb5e9b810cf220683`);
        const res = await req.json();
        dispatch({type : AllMovies , data : res.results , pages : 2});
    }
}