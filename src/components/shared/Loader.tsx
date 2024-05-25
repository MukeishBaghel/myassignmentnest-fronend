import React from 'react'
import { cn } from '../utils/cn'

const Loader = ({ className }: { className?: string }) => {
    return (
        <div className={cn('absolute flex justify-center items-center h-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-white/80 pointer-events-none z-40 w-full', className)}>
            <div className={"loader z-50"}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>

    )
}

export default Loader