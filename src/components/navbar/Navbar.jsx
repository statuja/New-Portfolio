import "./navbar.scss";
import {Sidebar} from "../sidebar/Sidebar"
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
    <Sidebar/>
    <div className="wrapper">
        <motion.div className="logo" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>
        <a href=""><img src="/logo-black-s.png" alt="" /></a>
        </motion.div>
        <div className="social">
            <a href=""><img src="/codepen.png" alt="" /></a>
            <a href=""><img src="/github.png" alt="" /></a>
            <a href=""><img src="/linkdn.png" alt="" /></a>
            
        </div>
    </div>
    </div>
  )
}
