import '../../../tailwindcss.css'
import MainPage from "./Home.tsx";

const Portfolio = () => {
  console.log('test')
  return (
    <div>
      <MainPage/>
      {/*<div className="w-full h-screen bg-grid-black/[0.3] relative flex-col justify-center">*/}
      {/*  <div style={{*/}
      {/*    height: '100%',*/}
      {/*    background: 'linear-gradient(to bottom, #000000, #330821, #590049, #730083, #711ecd)',*/}

      {/*  }}>*/}


      {/*  </div>*/}
      {/*  <div*/}
      {/*    className="absolute pointer-events-none inset-0 flex dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>*/}
      {/*</div>*/}
      <div

        className="h-200 w-full relative flex-col justify-center" style={{
        padding: '20rem 0 0 0',
        backgroundImage: 'linear-gradient(to bottom, #000000, #330821, #590049, #730083, #711ecd)'
      }}>
        {/* Radial gradient for the container to give a faded look */}
        <div className="h-200 w-full absolute top-0 bg-grid-small-white/[0.9] z-2"></div>
        <div
          className="absolute pointer-events-none inset-0 flex dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] z-3"></div>
        <div>
          </div>
      </div>
    </div>

  )
}
export default Portfolio
