interface BlogProps{
    title:string;
    content:string
}
const formatDate = (date:Date) :string=> {
    return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
}

const Blog:React.FC<BlogProps> = ({title, content})=>{
    return(
        <div>
            <div className="w-full py-5 lg:px-40 md:px-5">
                {/* {blogData.map((blog, index) => ( */}
                    {/* <div key={index} className={`w-full py-10 max-sm:px-1 sm:px-5 text-left ${index !== blogData.length - 1 ? "border-b border-gray-500" : ""
                        }`}> */}
                    
                        <small className="font-bold text-gray-500 ">{formatDate(new Date())}</small>
                        <h1 className="text-3xl font-bold text-white pb-5 pt-5">{title}</h1>
                        <p className=" text-gray-300 pb-5">{content}</p>

                        {/* <div className="flex flex-wrap gap-3 w-full sm:flex-nowrap">
                            {/* {((blog.tag && blog.tag.length) > 0) &&
                                blog.tag.map((tag, index) => ( */}
                                    {/* <span className="border-2 border-gray-300 bg-gray-600 p-1 rounded-md grid max-sm:grid-col-2">{tag}</span> */}
                                {/* ))} */}

                        {/* </div>*/} 
                    {/* </div> */}

                {/* ))} */}
            </div>
        </div>
    )
}

export default Blog