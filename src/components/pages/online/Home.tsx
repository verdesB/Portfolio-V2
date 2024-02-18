import '../../App.scss'
import '../../../tailwindcss.css'

import {TypewriterEffect} from "./SubComponents/TypeWritter.tsx";
import {Separator} from "./SubComponents/Separator.tsx";
import {AvatarFallback, Avatar, AvatarImage} from "./SubComponents/Avatar.tsx";
import moi from '../../../assets/moi.jpg'
import {AnimatedTooltip} from "./SubComponents/IconsTechno.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from './SubComponents/Tabs.tsx'
import {techFront, techBack, words, techBdd} from "@/components/pages/data/data.ts";
import Header from "@/components/pages/online/SubComponents/Header.tsx";
import {useWindowDimensions} from "@/hooks/useWindowDimensions.tsx";

const  MainPage =  () => {
  const { width } = useWindowDimensions();

  console.log('test')
  return (
    <div style={{position: 'relative',height: '200vh',boxSizing: 'border-box', overflowX: 'hidden'}}>
     <Header/>
      <div
        className={`h-full w-full bg-black bg-grid-small-white/[0.7] relative  box-border`}
        style={{padding: '23rem 0 0 0'}}>

        <div
          className="absolute pointer-events-none inset-0 flex dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
        <div style={{display: 'flex',flexDirection : width < 932 ? 'column' : 'row', justifyContent: 'center', gap: '5rem', boxSizing: 'border-box',padding: '1rem'}}>


        <div style={{
          width: width > 932 ? '47%' : '100%',

          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center' }}>
            <p style={{textAlign: 'left', width: width < 932 ?  '100%' : '65%'}}
               className={`font-bold relative z-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-1 ${width < 932 ? "text-3xl" : "text-2xl"}`}>
               Benjamin Verdès
            </p>
          </div>
          <Separator decorative={true} className={`mb-2 border-2-gray ${width < 932 ? "w-6/12" : "w-8/12"} ${width < 932 ? "self-start" : ""}`}/>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center',}}>
            <TypewriterEffect words={words} className={`${width < 932 ? "w-full" : "w-8/12"} ${width < 932 ? "text-5xl" : "text-4xl"} `}/>
          </div>
        </div>
        <div style={{
          boxSizing: 'border-box',
          width: width > 932 ? '47%' : '100%',
          height: '20%',
          backgroundImage: 'linear-gradient(to right top, #b518d6, #ff0086, #ff562f, #f9ad00, #a8eb12)',
          borderRadius: '1rem',
          boxShadow: 'rgba(100, 100, 111, 0.9) 0px 7px 29px 0px',


        }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: "#ffffff3a",
            backdropFilter: 'blur(1px)',
            borderRadius: '1rem',
            padding: '1rem',
            boxSizing: 'border-box',
            display: "flex",
            alignItems: width < 932 ? 'end' : 'start',
            gap: '0.5rem',
            flexDirection: width < 932 ? 'column' : 'row'
          }}>
            <Avatar style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
              <AvatarImage src={moi}/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: "column",
              alignItems: 'center',
              boxSizing: 'border-box',
              height: '100%',
              borderRadius: '1rem',
              padding: width < 932 ? '0rem' : '1rem',
              fontFamily: 'Montserrat',
              fontWeight: 'bold'
            }}>
              <h3 style={{color: 'white', textAlign: 'left', width: '100%'}}>Mon stack :</h3>
              <Tabs defaultValue="frontend" className="w-full flex flex-col h-full ">
                <TabsList className={
                  " w-full "

                }>
                  <TabsTrigger value="frontend">Front-End</TabsTrigger>
                  <TabsTrigger value="backend">Back-End</TabsTrigger>
                  <TabsTrigger value="sgdbdd">SGDBDD</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className={"m-auto pt-14"}>
                  <div className="flex flex-row items-center justify-center  w-full h-full  align-bottom">
                    <AnimatedTooltip items={techFront}/>
                  </div>
                </TabsContent>
                <TabsContent value="backend" className={"m-auto pt-14"}>
                  <div className="flex flex-row items-center justify-center  w-full h-full  align-bottom">
                    <AnimatedTooltip items={techBack}/>
                  </div>
                </TabsContent>
                <TabsContent value="sgdbdd" className={"m-auto pt-14"}>
                  <div className="flex flex-row items-center justify-center  w-full h-full  align-bottom">
                    <AnimatedTooltip items={techBdd}/>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default MainPage
