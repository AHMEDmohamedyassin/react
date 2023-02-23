import React from 'react';
import {Card , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const CardComp = ({data}) => {
  return (
    <Card style={{ width: '16rem' , height: '30rem' , boxShadow: '0 0 10px 1px #ddd'}} className="m-4 ">
      <Card.Img variant="top" style={{height: '220px'}} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
      <Card.Body className='d-flex flex-column align-start justify-content-between'>
        <Card.Title>العنوان : {data.title} </Card.Title>
        <Card.Text className='my-1'>تاريخ النشر : {data.release_date}</Card.Text>
        <Card.Text className='my-1'>التقييم : {data.vote_average}</Card.Text>
        <Card.Text className='my-1'>عدد المقيمون : {data.vote_count}</Card.Text>
        <Link to={`/movie/${data.id}`}><Button variant="primary" className='w-50 align-self-center'>ذهاب</Button></Link>
      </Card.Body>
    </Card>
  )
}
