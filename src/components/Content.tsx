"use client";
import { useState } from "react";
import Blog from "./Blog";
import blogData from "../constant/blogData";

interface IContent {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  PAGE_SIZE: number;
  totalContent: number;
  noOfPages: number;
  startIndex: number;
  endIndex: number;
}

const Content: React.FC<IContent> = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const PAGE_SIZE = 5;
  const totalContent = blogData.length;
  const noOfPages = Math.ceil(totalContent / PAGE_SIZE);
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const handleChangePage = (n: number) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, noOfPages - 1));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <div className="flex-col items-center justify-center">
      <div>
      {blogData.slice(startIndex, endIndex).map((blog, index, arr) => (
          <div
            key={index}
            className={`w-full py-10 max-sm:px-1 sm:px-5 text-left ${
              index !== arr.length - 1 ? "border-b border-gray-500" : ""
            }`}
          >
            <Blog title={blog.title} content={blog.content} />
          </div>
        ))}
      </div>
      <div className="mt-10 pb-30 flex justify-center border-b border-gray-500">
      <button disabled={currentPage === 0} onClick={goToPreviousPage}>
          ⏮️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <span
            className="border p-2 m-1 cursor-pointer"
            key={n}
            onClick={() => handleChangePage(n)}
          >
            {n + 1}
          </span>
        ))}
        <button disabled={currentPage === noOfPages - 1} onClick={goToNextPage}>
          ⏭️
        </button>
      </div>
       
      </div>
      
    </div>
  );
};

export default Content;
