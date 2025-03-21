import Link from "next/link"
import React from "react"

const Topics:React.FC = ()=>{
    const Topics:string[] = ["DSA", "System Design", "Projects", "AI/ML", "Frontened", "Backened"]
    return(
        <div className="flex flex-col items-center text-center py-10">
            <h1 className="pb-10 text-2xl font-semibold">Explore topics</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full max-w-6xl" >{Topics.map((topic, index)=>(
               <Link href="" className="border border-red-50 py-2 rounded-2xl text-sm sm:text-base bg-transparent hover:bg-blue-200 hover:opacity-[5] transition-all" key={index} >{topic}</Link>
            ))}</div>
        </div>
    )
}

export default Topics