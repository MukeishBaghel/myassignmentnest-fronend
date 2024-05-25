import React from 'react'
import { cn } from '../utils/cn'

const Loader = ({ state, className }: { state: boolean | undefined, className?: string }) => {
    return (
        <>{state && <div className={cn("loader", className)}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        }</>
    )
}

export default Loader