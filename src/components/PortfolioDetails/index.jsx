import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom";
import { get } from '../../lib/fetcher'

export default function Index() {

  let params = useParams();
  const { status, data, error, isFetching } = useQuery(["projects"], async ()=> get(`/portfolio/${params.type}/${params.id}`));
  const [obj, setObject] = useState()
  useEffect(() => {
      if(!isFetching){
          setObject(data)
      }

      console.log(data)
  }, [isFetching])

  
  return (
    <div>index</div>
  )
}
