import React, { ReactElement } from "react";

type Props = {svg:ReactElement, value:string};

function Filter({svg, value}: Props) {
  return (
    <form method="POST" className="flex items-center justify-center ">
        <div className="border-blue-300 border-2 p-3 rounded-full bg-blue-300 text-blue-600 translate-x-10 ">
            {svg}
        </div>
      <input type="submit" value={value} className="cursor-pointer border-4 py-2 rounded-full text-lg font-bold pl-12 pr-4 hover:bg-blue-600 hover:text-white" />
    </form>
  );
}

export default Filter;
