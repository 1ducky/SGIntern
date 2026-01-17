import Link from "next/link"

export const LinkButton = ({linkProp,children}) => {
    return(

        <Link prefetch={false}  href={linkProp} className="bg-blue-400 text-white hover:bg-white hover:text-blue-400 border-2 border-blue-400 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 my-2">
            {children}
        </Link>
    )
}