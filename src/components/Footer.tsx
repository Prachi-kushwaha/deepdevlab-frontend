import Link from "next/link"

const Footer:React.FC = () => {
    return (
        <div className=" text-whitebg-[#1C1C1C] flex items-center justify-between px-20 py-5 mt-10">
            <div className="w-1/3">

                <h1 className="text-xl font-bold pb-5">About us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque laboriosam animi rem! Provident quisquam vitae, dolor perspiciatis dolore quibusdam.</p>
            </div>
            <div className="flex flex-col">

                <h1 className="text-xl font-bold pb-5">services</h1>
                <Link href="">frontened</Link>
                <Link href="">backened</Link>
                <Link href="">fullstack</Link>
                <Link href="">ai/ml</Link>
            </div>
            <div className="flex flex-col ">

                <h1 className="text-xl font-bold pb-5">Blogs</h1>
                <Link href="">DSA</Link>
                <Link href="">Web development</Link>
                <Link href="">System Design</Link>
                <Link href="">AI/ML</Link>
            </div>

        </div>
    )
}

export default Footer