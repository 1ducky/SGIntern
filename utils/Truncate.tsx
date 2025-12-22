export default function truncate  (text:string,limit:number=50) {
    return(text.length > limit ? text.substring(0,limit)+"..." : text)
}