import logo from "../../../../assets/logo.svg";
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, navigationMenuTriggerStyle
} from "./NavigationMenu.tsx";
import {Link} from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import {useWindowDimensions} from "../../../../hooks/useWindowDimensions.tsx";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer.tsx'
import {Button} from "@mui/material";

const Header = () => {
  const { width } = useWindowDimensions();
  console.log()
  return (
    <header style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      height: '6rem',
      width: '100%',
      zIndex: 3,
      display: "flex",
      justifyContent: 'center'
    }}>
      <div style={{position: "absolute", top: '1rem', left: '1rem', zIndex: 1, width: '4rem', height: '4rem'}}>
        <img src={logo}/>
      </div>
      {width < 932 ? (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outlined" sx={{color: 'white', border: '1px solid white',margin: 'auto', height: '3rem', width: '3rem'}}>Menu</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu de navigation</DrawerTitle>
              <DrawerDescription>Pas mal non ?</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <NavigationMenu>
                <NavigationMenuList  className={" w-full gap-2 flex-wrap justify-center box-border"}>
                  <NavigationMenuItem className={" w-full box-border"}>
                    <Link to="/" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                        backgroundColor: 'rgba(154,154,154,0.63)',
                        color: 'white',
                        border: '1px solid grey',
                        backdropFilter: 'blur(3px)',
                        display: "flex",
                        alignItems: 'center',
                        gap: '0.5rem',
                        width: '100%',
                        marginLeft: '0.1rem'

                      }}>
                        <HomeRoundedIcon/> Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={" w-full"}>
                    <Link to="/" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                        backgroundColor: 'rgba(154,154,154,0.63)',
                        color: 'white',
                        border: '1px solid grey',
                        backdropFilter: 'blur(3px)',
                        display: "flex",
                        alignItems: 'center',
                        gap: '0.5rem',
                        width: '100%'
                      }}>
                        <PersonSearchRoundedIcon/> Présentation
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem >
                  <NavigationMenuItem className={" w-full"}>
                    <Link to="/" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                        backgroundColor: 'rgba(154,154,154,0.63)',
                        color: 'white',
                        border: '1px solid grey',
                        backdropFilter: 'blur(3px)',
                        display: "flex",
                        alignItems: 'center',
                        gap: '0.5rem',
                        width: '100%'
                      }}>
                        <HomeRepairServiceRoundedIcon/> Projets
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={" w-full"}>
                    <Link to="/" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                        backgroundColor: 'rgba(154,154,154,0.63)',
                        color: 'white',
                        border: '1px solid grey',
                        backdropFilter: 'blur(3px)',
                        display: "flex",
                        alignItems: 'center',
                        gap: '0.5rem', width: '100%'
                      }}>
                        <ContactPageRoundedIcon/>Contacte Moi
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {/*<DrawerClose>*/}
              {/*  <Button variant="outline">Cancel</Button>*/}
              {/*</DrawerClose>*/}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <NavigationMenu>
          <NavigationMenuList style={{gap: '1rem'}}>
            <NavigationMenuItem>
              <Link to="/" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                  backgroundColor: 'rgba(154,154,154,0.63)',
                  color: 'white',
                  border: '1px solid grey',
                  backdropFilter: 'blur(3px)',
                  display: "flex",
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <HomeRoundedIcon/> Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                  backgroundColor: 'rgba(154,154,154,0.63)',
                  color: 'white',
                  border: '1px solid grey',
                  backdropFilter: 'blur(3px)',
                  display: "flex",
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <PersonSearchRoundedIcon/> Présentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                  backgroundColor: 'rgba(154,154,154,0.63)',
                  color: 'white',
                  border: '1px solid grey',
                  backdropFilter: 'blur(3px)',
                  display: "flex",
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <HomeRepairServiceRoundedIcon/> Projets
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{
                  backgroundColor: 'rgba(154,154,154,0.63)',
                  color: 'white',
                  border: '1px solid grey',
                  backdropFilter: 'blur(3px)',
                  display: "flex",
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <ContactPageRoundedIcon/>Contacte Moi
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}

    </header>
  )
}
export default Header
