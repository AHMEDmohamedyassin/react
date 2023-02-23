import React from 'react';
import { CardComp } from './card';

export const Content = ({data}) => {
  return (
    <div className='container d-flex justify-content-center flex-wrap'>
        {data.length ? (
            data.map((item , index) => {
                return <CardComp key={index} data={item}/>
            })
        ) : <h2 className='mt-5 bg-primary text-white px-4 py-2 rounded'>لا يوجد بيانات</h2>}
    </div>
  )
}
