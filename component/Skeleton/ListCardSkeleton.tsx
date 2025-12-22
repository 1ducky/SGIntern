

export const ListCardSkeleton = ({Total} : {Total : number}) =>{

    return(
        <>
            <div className="mx-2 px-5 py-5  flex flex-wrap flex-row">
                {Array.from( {length : Total}).map((_,i) => {


                    return (
                        <li key={i} className="xl:basis-1/3 lg:basis-1/2 basis-full py-2 flex gap-1 overflow-hidden animate-pulse transform-gpu will-change-transform">
                            <div className="image shrink-0 w-24 h-32 bg-blue-500 relative">
                                
                                
                            </div>
                            <div className="flex flex-col p-2 animate-pulse w-full gap-3">
                                {/* Static */}
                                <h3 className="bg-gray-500 basis-full h-1"></h3>
                                
                                <h3 className="bg-gray-500 basis-1/2 h-2"></h3>
                                <div className="flex text-center flex-wrap gap-x-2 gap-y-1 animate-pulse">
                                    <h3 className="bg-gray-500 basis-1/4 h-2"></h3>
                                    <h3 className="bg-gray-500 basis-full h-2"></h3> 
                                </div>
                            </div>
                            
                            
                        </li>
                    )
                })}
            </div>
        </>
    )
}