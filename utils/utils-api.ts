import { NextRequest } from "next/server";

export default async function parseBody(Request: NextRequest){
    try{
        return await Request.json()
    }catch{
        return {}
    }
}