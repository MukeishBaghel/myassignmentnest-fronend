import React, { useEffect, useState } from 'react';
import PopUpMessage, { PopUpMessageType } from '../constants/PopupMsg';
import successvid from '/assets/images/successGif.gif';

const FakePopUp = () => {
    const [msg, setMsg] = useState<PopUpMessageType | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {

        const interval = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * PopUpMessage.length);
            const message = PopUpMessage[randomNumber];
            if (message) {
                setMsg(message);
            }
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 4000); // Display for 4 seconds
        }, 50 * 1000); // Appear every 60 seconds

        // Cleanup function to clear the interval when component unmounts
        console.log(msg);
        return () => {
            clearInterval(interval);
        };
    }, []); // Empty dependency array to run only once on component mount

    if (!msg) {
        return null;
    }

    const msgWithId = msg.message ? msg.message.replace("user ID", `user ID ${msg.userid}`) : '';

    return (
        <div className={`fixed sm:bottom-40 z-[1001] rounded-lg sm:left-10 text-white bg-primary-200 sm:max-w-[300px] py-2 ease-in duration-1000 max-sm:top-4 h-fit ${showPopup ? "-translate-y-[40%] opacity-100" : "translate-y-[20%] opacity-0"}`}>
            <div className='flex gap-2'>
                <img src={successvid} alt="" className='w-20 h-20 self-start' />
                <div className='text-sm pt-2 pr-2'>
                    <p className='font-semibold'>
                        {msg.status}
                    </p>
                    <p className=''>
                        {msgWithId}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FakePopUp;
