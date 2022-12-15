import Link from "next/link";
import React from "react";

type Props = { content: string, href:string };

function Category({ content, href }: Props) {
  return <Link href={href} className='w-full p-8 flex items-center justify-center border-b-gray-200 border-b-4 font-bold text-lg hover:border-b-blue-600 hover:text-blue-600'>{content}</Link>;
}

export default Category;
