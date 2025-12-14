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
                <li key={i} className="flex flex-row gap-2 justify-start">
                    <a target="_blank" href={`${List}`} className="px-3 py-1 flex-1 bg-blue-50 hover:bg-blue-100 rounded-full">{List}{objkey}</a>
                    <div className="p-1 flex justify-center items-center bg-red-300 hover:bg-red-400 rounded-full" onClick={ () => onDelete(objkey,i) }><i className="fa-solid fa-trash-can"></i></div>
                </li>

            ))}
        </>
    )
}