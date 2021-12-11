import Head from "next/head"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Result from "../components/Result"
import Axios from 'axios'
import requests from "../utils/requests"

export default function Home({data}) {
  console.log('Data',data);
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar/>
      <Result data={data}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
    
  console.log('fetch',requests[genre])
  const data = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || genre.fetchTrending.url }`).then(res=>res.json())
  return {
      props: {
          data: data
      }
  }
}