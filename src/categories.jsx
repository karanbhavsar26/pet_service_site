import { motion } from "framer-motion";
import { useState } from "react";

export default function Categories() {
    let [data, setData] = useState([
        {
            id: 1,
            title: "Pet Grooming",
            description: "Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail",
            img: "./Group 25.png",
            status: true
        },
        {
            id: 2,
            title: "Pet Clinic",
            description: "The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.",
            img: "./Group 26.png",
            status: false
        },
        {
            id: 3,
            title: "Pet Daycare",
            description: "Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage",
            img: "./Group 27.png",
            status: false
        },
        {
            id: 4,
            title: "Pet Training",
            description: "Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.",
            img: "./Group 28.png",
            status: false
        }
    ])
    function onCardChange(title) {
        let cloneData = [...data]
        let newData = cloneData.map((cat) => {
            if (cat.title === title) {
                cat.status = true
            }
            else {
                cat.status = false
            }
            return cat
        })
        setData(newData)
    }
    return (<>
        <div className="relative">
            <div className="absolute top-10 right-0 left-28 bottom-0 text-5xl font-serif">
                <p>Categories</p>
            </div>
            <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg" viewBox="100 200 1400 1000"><path d="M289.286 192.858H96.429q-96.429 289.286 192.858 0 385.714 0 867.858 96.429c385.714 -96.429 96.429 578.571 192.858 482.142 192.858 0 96.429 482.142 -1350 96.429l192.858 -385.714zl-96.429 289.286L0 867.858" fill="#FFF2B3" /></svg>
            <div>
                {data.map((cat) => {
                    return (<div>
                        {cat.status &&
                            <div>
                                <div className="flex gap-2 flex-col absolute top-48 right-0 left-28 bottom-0 text-2xl w-[50vw]">
                                    <p className="font-semibold">{cat.title}</p>
                                    <p>{cat.description}</p>
                                    <div className="p-4 bg-[#C7E7E1] text-[#124C5F] px-8 rounded text-sm w-fit">Get Started </div>
                                </div>
                                <motion.div
                                    // animate={{ initial: 0, x: "-1400px" }}
                                    // transition={{ duration: 3, delay: 2 }}
                                    className="absolute top-72 right-0 left-60 bottom-0 text-8xl">
                                    {/* <p className="  font-serif">Taking care of your pets !</p> */}

                                </motion.div>
                                <div>
                                    <div onClick={() => onCardChange("Pet Grooming")} className={`p-2 ${cat.title == "Pet Grooming" ? "bg-[#124C5F]  text-white" : ""} h-fit cursor-pointer w-fit rounded text-sm flex gap-2 absolute top-[500px] right-0 left-[130px] bottom-0 `}>
                                        <svg width="25" height="25" viewBox="0 0 146 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M71.4031 76.1815C62.7381 83.2042 66.8055 93.2959 64.3357 107.371C60.9372 127.856 70.3169 136.472 79.0245 133.12C87.7322 129.768 87.6725 116.548 95.9786 111.012C103.778 105.01 116.114 109.077 121.669 101.467C127.477 94.0903 122.321 82.0913 102.286 79.124C88.9407 77.3084 80.6121 70.1125 71.4031 76.1815Z" fill="#FFE55E" />
                                            <path d="M42.7035 85.2519C52.9902 89.5132 60.0423 98.1517 58.4875 104.504C56.7266 111.1 46.9933 112.966 36.7066 108.705C26.4199 104.443 19.3679 95.8049 20.9227 89.4524C22.6836 82.857 32.4168 80.9906 42.7035 85.2519Z" fill="#FFAA00" />
                                            <path d="M87.2446 52.5987C87.4325 63.6279 93.1155 72.4666 99.7518 72.6813C106.388 72.8961 111.837 64.3306 111.65 53.3014C111.462 42.2722 105.779 33.4335 99.1424 33.2187C92.2904 33.2582 86.841 41.8238 87.2446 52.5987Z" fill="#FFAA00" />
                                            <path d="M50.7927 52.7878C59.4158 61.1571 62.3101 72.3471 57.5457 77.4008C52.7813 82.4544 41.8571 79.6051 33.234 71.2358C24.6109 62.8665 21.7166 51.6764 26.481 46.6227C31.2454 41.5691 42.1696 44.4185 50.7927 52.7878Z" fill="#FFAA00" />
                                            <path d="M55.3427 48.9723C60.2213 59.1344 69.0592 64.63 74.9768 61.7619C81.1028 58.6483 82.1153 48.2158 77.4815 38.2785C72.603 28.1163 63.765 22.6208 57.8474 25.4888C51.6851 28.1321 50.4642 38.8101 55.3427 48.9723Z" fill="#FFAA00" />
                                        </svg>
                                        <p className="font-semibold">Pet Grooming</p>
                                    </div>
                                    <div onClick={() => onCardChange("Pet Clinic")} className={`p-2 ${cat.title == "Pet Clinic" ? "bg-[#124C5F]  text-white" : ""} h-fit cursor-pointer w-fit rounded text-sm flex gap-2 absolute top-[500px] right-0 left-[280px] bottom-0`}>
                                        <svg width="25" height="25" viewBox="0 0 146 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M71.4031 76.1815C62.7381 83.2042 66.8055 93.2959 64.3357 107.371C60.9372 127.856 70.3169 136.472 79.0245 133.12C87.7322 129.768 87.6725 116.548 95.9786 111.012C103.778 105.01 116.114 109.077 121.669 101.467C127.477 94.0903 122.321 82.0913 102.286 79.124C88.9407 77.3084 80.6121 70.1125 71.4031 76.1815Z" fill="#FFE55E" />
                                            <path d="M42.7035 85.2519C52.9902 89.5132 60.0423 98.1517 58.4875 104.504C56.7266 111.1 46.9933 112.966 36.7066 108.705C26.4199 104.443 19.3679 95.8049 20.9227 89.4524C22.6836 82.857 32.4168 80.9906 42.7035 85.2519Z" fill="#FFAA00" />
                                            <path d="M87.2446 52.5987C87.4325 63.6279 93.1155 72.4666 99.7518 72.6813C106.388 72.8961 111.837 64.3306 111.65 53.3014C111.462 42.2722 105.779 33.4335 99.1424 33.2187C92.2904 33.2582 86.841 41.8238 87.2446 52.5987Z" fill="#FFAA00" />
                                            <path d="M50.7927 52.7878C59.4158 61.1571 62.3101 72.3471 57.5457 77.4008C52.7813 82.4544 41.8571 79.6051 33.234 71.2358C24.6109 62.8665 21.7166 51.6764 26.481 46.6227C31.2454 41.5691 42.1696 44.4185 50.7927 52.7878Z" fill="#FFAA00" />
                                            <path d="M55.3427 48.9723C60.2213 59.1344 69.0592 64.63 74.9768 61.7619C81.1028 58.6483 82.1153 48.2158 77.4815 38.2785C72.603 28.1163 63.765 22.6208 57.8474 25.4888C51.6851 28.1321 50.4642 38.8101 55.3427 48.9723Z" fill="#FFAA00" />
                                        </svg>
                                        <p className="font-semibold">Pet Clinic</p>
                                    </div>
                                    <div onClick={() => onCardChange("Pet Daycare")} className={`p-2 ${cat.title == "Pet Daycare" ? "bg-[#124C5F]  text-white" : ""} h-fit cursor-pointer w-fit rounded text-sm flex gap-2 absolute top-[500px] right-0 left-[400px] bottom-0`}>
                                        <svg width="25" height="25" viewBox="0 0 146 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M71.4031 76.1815C62.7381 83.2042 66.8055 93.2959 64.3357 107.371C60.9372 127.856 70.3169 136.472 79.0245 133.12C87.7322 129.768 87.6725 116.548 95.9786 111.012C103.778 105.01 116.114 109.077 121.669 101.467C127.477 94.0903 122.321 82.0913 102.286 79.124C88.9407 77.3084 80.6121 70.1125 71.4031 76.1815Z" fill="#FFE55E" />
                                            <path d="M42.7035 85.2519C52.9902 89.5132 60.0423 98.1517 58.4875 104.504C56.7266 111.1 46.9933 112.966 36.7066 108.705C26.4199 104.443 19.3679 95.8049 20.9227 89.4524C22.6836 82.857 32.4168 80.9906 42.7035 85.2519Z" fill="#FFAA00" />
                                            <path d="M87.2446 52.5987C87.4325 63.6279 93.1155 72.4666 99.7518 72.6813C106.388 72.8961 111.837 64.3306 111.65 53.3014C111.462 42.2722 105.779 33.4335 99.1424 33.2187C92.2904 33.2582 86.841 41.8238 87.2446 52.5987Z" fill="#FFAA00" />
                                            <path d="M50.7927 52.7878C59.4158 61.1571 62.3101 72.3471 57.5457 77.4008C52.7813 82.4544 41.8571 79.6051 33.234 71.2358C24.6109 62.8665 21.7166 51.6764 26.481 46.6227C31.2454 41.5691 42.1696 44.4185 50.7927 52.7878Z" fill="#FFAA00" />
                                            <path d="M55.3427 48.9723C60.2213 59.1344 69.0592 64.63 74.9768 61.7619C81.1028 58.6483 82.1153 48.2158 77.4815 38.2785C72.603 28.1163 63.765 22.6208 57.8474 25.4888C51.6851 28.1321 50.4642 38.8101 55.3427 48.9723Z" fill="#FFAA00" />
                                        </svg>
                                        <p className="font-semibold">Pet Daycare</p>
                                    </div>
                                    <div onClick={() => onCardChange("Pet Training")} className={`p-2 ${cat.title == "Pet Training" ? "bg-[#124C5F]  text-white" : ""} h-fit cursor-pointer w-fit rounded text-sm flex gap-2 absolute top-[500px] right-0 left-[540px] bottom-0`}>
                                        <svg width="25" height="25" viewBox="0 0 146 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M71.4031 76.1815C62.7381 83.2042 66.8055 93.2959 64.3357 107.371C60.9372 127.856 70.3169 136.472 79.0245 133.12C87.7322 129.768 87.6725 116.548 95.9786 111.012C103.778 105.01 116.114 109.077 121.669 101.467C127.477 94.0903 122.321 82.0913 102.286 79.124C88.9407 77.3084 80.6121 70.1125 71.4031 76.1815Z" fill="#FFE55E" />
                                            <path d="M42.7035 85.2519C52.9902 89.5132 60.0423 98.1517 58.4875 104.504C56.7266 111.1 46.9933 112.966 36.7066 108.705C26.4199 104.443 19.3679 95.8049 20.9227 89.4524C22.6836 82.857 32.4168 80.9906 42.7035 85.2519Z" fill="#FFAA00" />
                                            <path d="M87.2446 52.5987C87.4325 63.6279 93.1155 72.4666 99.7518 72.6813C106.388 72.8961 111.837 64.3306 111.65 53.3014C111.462 42.2722 105.779 33.4335 99.1424 33.2187C92.2904 33.2582 86.841 41.8238 87.2446 52.5987Z" fill="#FFAA00" />
                                            <path d="M50.7927 52.7878C59.4158 61.1571 62.3101 72.3471 57.5457 77.4008C52.7813 82.4544 41.8571 79.6051 33.234 71.2358C24.6109 62.8665 21.7166 51.6764 26.481 46.6227C31.2454 41.5691 42.1696 44.4185 50.7927 52.7878Z" fill="#FFAA00" />
                                            <path d="M55.3427 48.9723C60.2213 59.1344 69.0592 64.63 74.9768 61.7619C81.1028 58.6483 82.1153 48.2158 77.4815 38.2785C72.603 28.1163 63.765 22.6208 57.8474 25.4888C51.6851 28.1321 50.4642 38.8101 55.3427 48.9723Z" fill="#FFAA00" />
                                        </svg>
                                        <p className="font-semibold">Pet Training</p>
                                    </div>
                                </div>
                                <div>
                                    <motion.div
                                        animate={{
                                            x: [400,300,200,100,0],
                                            y: [-400,-300,-200,-100,  0],
                                            // rotate: 90 // This will rotate the image by 90 degrees
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute top-10 right-0 left-[55vw] bottom-0"
                                    >
                                        <img src={cat.img} className="w-[700px] h-[700px] rounded-full" />
                                    </motion.div>

                                </div>
                            </div>
                        }
                    </div>
                    )
                })}
            </div>
        </div>

    </>)
}