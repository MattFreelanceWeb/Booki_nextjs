import Image from "next/image";
import React from "react";
import imgHotel from '../../assets/images/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg'
import Stars from "./Stars";

type Props = {prix:number,name:string, stars:number};

function PopularityCards({prix,name ,stars}: Props) {

  {/**pour que le compo soit mappable via une recup de donnée en fetch:  créer des props (que l'on recupère du fetch) src, alt, rate */}

  return (
    <div className="flex items-center bg-white p-2 rounded-md gap-1 opacity-90 hover:opacity-100 cursor-pointer">
      <div className="relative  h-[150px] w-[175px] ">
        <Image src={imgHotel} alt={"chambre d'hôtel"} fill className='rounded-l-md object-cover '/>
      </div>
      <div className=" h-[150px] flex flex-col items-start justify-around ">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-lg">nuit à partir de {prix}<span>€</span></p>
        <Stars rate={stars}/>
      </div>
    </div>
  );
}

export default PopularityCards;
