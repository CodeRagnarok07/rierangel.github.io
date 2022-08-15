import Navbar from './Navbar'
import Footer from './Footer'



export default function Layout({children}){
  return (
    <>
      {/* <Head>
        <title>Angel Riera Portfolio</title>
        <meta name="description" content="Angel Riera FullStack Web Developer with + 2 year experience in Javascript and Python" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      
      <Navbar/>

      <main className='flex-1'>
        {children}
      </main>

      <Footer/>
    </>
  )
}
