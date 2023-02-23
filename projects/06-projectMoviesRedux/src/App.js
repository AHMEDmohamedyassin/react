import {React , useState, useEffect} from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Content } from './components/contents';
import { Pagination } from './components/pagination';
import { Details } from './components/Details';
// redux importings
import { useSelector , useDispatch } from "react-redux";
import {AllMoviesAction} from './redux/action/movieAction';

function App() {
  const [getData , setData] = useState('');
  const [getPages , setPages] = useState(0);

  const fetchAPI = async (page = 1) => {
    const req  = await fetch(`https://api.themoviedb.org/3/movie/popular?region=eg&language=ar&include_image_language=ar&page=${page}&api_key=5bf0ec2ef3a4841cb5e9b810cf220683`);
    const res = await req.json();
    setData(res.results);
    setPages(res.total_pages);
  };

  const searchAPI = async (word) => {
    if(word == '') return fetchAPI();
    const req = await fetch(`https://api.themoviedb.org/3/search/movie?region=eg&language=ar&include_image_language=ar&query=${word}&api_key=5bf0ec2ef3a4841cb5e9b810cf220683`);
    const res = await req.json();
    setData(res.results);
    setPages(res.total_pages);
  }



  ///////##########################//////////////////////
  const MoviesData = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAPI()
    dispatch(AllMoviesAction())
  } , []);
  useEffect(()=>{
    console.log(MoviesData.movies) // هنا استطعت إحضار البيانات لكن التعديل صعب 
  } )
//////////////###############/////////////////////////////
  return (
  <div>
    <BrowserRouter>
      <NavBar search={searchAPI}/>
      <Routes>
        <Route path='/' element={<div> <Content data={getData}/> <Pagination page={fetchAPI} pageNum={getPages} /> </div> }/>
        <Route path='/movie/:id' element={<Details/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
