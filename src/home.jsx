import { motion } from "framer-motion";
export default function Home() {

    return (
        <div >
            <div className="relative">
                <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg" viewBox="100 200 1400 1000"><path d="M289.286 192.858H96.429q-96.429 289.286 192.858 0 385.714 0 867.858 96.429c385.714 -96.429 96.429 578.571 192.858 482.142 192.858 0 96.429 482.142 -1350 96.429l192.858 -385.714zl-96.429 289.286L0 867.858" fill="#FFF2B3" /></svg>
                <motion.div
                    animate={{ initial: 0, x: "-1400px" }}
                    transition={{ duration: 3, delay: 2 }}
                    className="absolute top-72 right-0 left-60 bottom-0 text-8xl">
                    <p className="  font-serif">Taking care of your pets !</p>

                </motion.div>
                <motion.div
                    initial={{ x: 0, y: "-3000px" }} // Set the initial position here
                    animate={{ x: 0, y: 0 }} // Set the final position here
                    transition={{ duration: 2, delay: 3 }} // Transition settings
                    className="absolute top-72 right-0 left-60 bottom-0 text-5xl w-[800px] text-center"
                >
                    <p className="font-serif">Get various services personalized for your pets like</p>
                </motion.div>

                <motion.div
                    animate={{ x: [0, 0, -60, -180], y: [0, 40, 40, 40] }}
                    transition={{ duration: 3, delay: 2 }}
                    className="absolute top-16 right-0 left-[85vw] bottom-0 ">
                    <img src="./unsplash_5PVXkqt2s9k.png" className="w-64 " />
                </motion.div>
                <motion.div
                    animate={{ x: [0, 0, 60, 120, 180, 250], y: [0, 40, 40, 40, 40, 40] }}
                    transition={{ duration: 3, delay: 2 }}
                    className="absolute top-24 right-0 left-[55vw] bottom-0 ">
                    <img src="./unsplash_ZCHj_2lJP00.png" className="w-64 " />
                </motion.div>
                <motion.div
                    animate={{ x: [0, 0, 60, 180], y: [0, -180, -180, -180] }}
                    transition={{ duration: 2, delay: 2 }}
                    className="absolute top-[48vh] right-0 left-[60vw] bottom-0 "
                >
                    <img src="./unsplash_Mv9hjnEUHR4.png" className="w-64 " />
                </motion.div>
                <motion.div
                    animate={{ x: [0, 0, -60, -180], y: [0, -160, -160, -160] }}
                    transition={{ duration: 3, delay: 2 }}
                    className="absolute top-[54vh] right-0 left-[82vw] bottom-0 "
                >
                    <img src="./unsplash_BJaqPaH6AGQ.png" className="w-64 " />
                </motion.div>
                <motion.div
                    animate={{ width: ["320px", "320px", "320px", "380px"] }}
                    transition={{ duration: 3, delay: 3 }}
                    className="absolute top-[12vh] right-0 left-[70vw] bottom-0 ">
                    <img src="./unsplash_eoqnr8ikwFE.png" />
                </motion.div>
            </div>
        </div>
    )
}