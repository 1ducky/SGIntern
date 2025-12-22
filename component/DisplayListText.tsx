

type ObjectKey = "link" | "pendidikan"

interface Props {
    Data? : string[] | null
    objkey : ObjectKey
    onDelete : (key:ObjectKey, index:number) => void
}

export const DIsplayListText = ({Data,objkey,onDelete} : Props) => {

    return(
        <>
            {Data?.map((List, i) => (
                <li key={i} className="flex flex-row gap-2 justify-start overflow-hidden">
                    <div className="p-1 flex justify-center items-center bg-red-300 hover:bg-red-400 rounded-full min-w-10 min-h-10 w-10 h-10 shrink0" onClick={ () => onDelete(objkey,i) }><i className="fa-solid fa-trash-can shrink-0"></i></div>
                    <a target="_blank" href={objkey !== 'pendidikan' ? `${List}` : `https://www.google.com/search?q=${List}`} className="px-3 py-1 flex-1 bg-blue-50 hover:bg-blue-100 rounded-full text-wrap min-w-0">{List}</a>
                </li>

            ))}
        </>
    )
}