import React from 'react'

const Loader = ({ state }: { state: boolean | undefined }) => {
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