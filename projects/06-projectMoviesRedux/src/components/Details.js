import React , {useState , useEffect} from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
    const id = useParams().id
    const [getData , setData] = useState('');
    const [getWatchLink , setWatchLink] = useState(null);
    const fetchAPI = async () => {
        const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5bf0ec2ef3a4841cb5e9b810cf220683`);
        const res = await req.json();
        setData(res)
        const watchLink = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=5bf0ec2ef3a4841cb5e9b810cf220683`);
        const watchLinkRes = await watchLink.json();
        if(watchLinkRes.results.US != undefined) setWatchLink(watchLinkRes.results.US.link)
    };

    useEffect(() => {
        fetchAPI()
    } , [])

    return (
        <div className="container d-flex flex-column align-item-center">
            <div className="row my-4">
                <div className="col-lg-4">
                    <img style={{height: '320px'}} className="rounded my-3 mx-2" src={`https://image.tmdb.org/t/p/w500${getData.poster_path}`}/>
                </div>
                <div style={{background : '#eee'}} className="col-lg-8 d-flex flex-column justify-content-around align-item-center rounded">
                    <div className="py-4 border-bottom border-primary text-center fs-2">العنوان : {getData.title}</div>
                    <div className="py-4 border-bottom border-primary text-center">تاريخ الإصدار : {getData.release_date}</div>
                    <div className="py-4 border-bottom border-primary text-center">متوسط التقييم : {getData.vote_average}</div>
                    <div className="py-4 text-center">عدد المقيمون : {getData.vote_count}</div>
                </div>
            </div>
            <div className="row my-4 px-4 py-3 text-center rounded border-bottom border-end border-primary" style={{background: '#eee'}}>{getData.overview}</div>
            {
                getWatchLink != null ? (
                    <a href={getWatchLink} className="btn btn-primary">مشاهدة</a>
                ) : null
            } 
        </div>
    );
};