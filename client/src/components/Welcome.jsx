import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"
import cryptocurrency from "../images/cryptocurrency.png"
import { Link } from "react-router-dom";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
    const handleSubmit = () => {

    }
    return(
        <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col md:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              Krypt<br /> Read Explore Invest 
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Read about the crypto world. Explore cryptocurrencies, trusted by <b>Millions</b> of users.
            </p>
                    <button
                        type="button"
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        <Link to="/home" className="text-white text-base font-semibold ">Get Started</Link>
                    </button>
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10"
                    >
                        <div className={` rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>
                        <div className={commonStyles}>
                            Security
                        </div>
                        <div className={` rounded-tr-2xl ${commonStyles}`}>
                            Encrypted
                        </div>
                        <div className={` rounded-bl-2xl ${commonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={commonStyles}>
                           Zero Charges
                        </div>
                        <div className={` rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                         
                    </div>

                </div>               


                    <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    
                        <img src={cryptocurrency} alt="cryptocurrency_image" className="p-11 invert " id="crypto_image" />
                    
                    <div className="h-[1px] w-full bg-gray-400 my-2" />
                    </div>
                </div>
                </div>
        </div>
    );

}

export default Welcome