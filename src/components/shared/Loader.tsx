import React from 'react'

const Loader = ({ state }: { state: boolean }) => {
    return (
        <>{state && <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        }</>
    )
}

export default Loader