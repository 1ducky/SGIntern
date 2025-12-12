
export const HScrollCardSkeleton = ({Total} : {Total : number}) => {

    return (
        <div className="Scrollbar-transparent my-5 px-5 overflow-x-scroll overflow-y-hidden flex flex-row flex-nowrap gap-5">
            {
                Array.from( {length : Total}).map((_,i) => {

                    return(
                        <li key={i} className="flex flex-col w-40 animate-pulse  gap-0.5 transform-gpu will-change-transform">
                            <div className="image shrink-0 w-40 h-60 bg-gray-500 relative">
                            </div>
                            <h3 className="w-full h-5 bg-gray-500">.</h3>
                            <h3 className="w-1/3 h-2 bg-gray-500">.</h3>
                        </li>
                    )
                })
            }
        </div>
    )
}