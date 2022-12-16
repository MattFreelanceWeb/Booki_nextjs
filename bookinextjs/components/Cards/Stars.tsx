import React from "react";
import { v4 as uuid_v4 } from "uuid";

{
  /** algo qui recupère une note comprise entre 0 et une note maximale défini à l'avance pour afficher un nombre d'etoiles pleine équivalent à la note et laissant le reste en étoile vide */
}

type Props = { rate: number };

function Stars({ rate }: Props) {
  const maxRate: number = 5;
  const minRate: number = 0;

  {
    /**conditions pour vérifier si la note est bien comprise entre 0 et et la note maximale acceptée*/
  }

  if (rate > maxRate) {
    rate = maxRate;
  } else if (rate < minRate) {
    rate = minRate;
  }

  {
    /** initialisation du nombre d'étoiles vides */
  }
  const emptyStars = maxRate - rate;

  {
    /**fonction qui créé un tableau ayant un nombre d'item équivalent à la note et qui va retourner via un map des étoiles en SVG  */
  }

  let arrayFilledStars = () => {
    const stars = [];

    for (let i = 0; i < rate; i++) {
      stars.push("filledStars");
    }
    return (
      <>
        {stars.map((item) => (
          <div key={uuid_v4()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 stroke-blue-600 fill-blue-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </>
    );
  };

  {
    /**fonction qui créé un tableau ayant un nombre d'item équivalent à la différence entre la note maximale et la note et qui va retourner via un map des étoiles en SVG  */
  }

  let arrayEmptyStars = () => {
    const initialEmptyStars = [];

    for (let i = 0; i < emptyStars; i++) {
      initialEmptyStars.push("EmptyStars");
    }
    return (
      <>
        {initialEmptyStars.map((item) => (
          <div key={uuid_v4()}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="flex items-center justify-center">
      {arrayFilledStars()}
      {arrayEmptyStars()}
    </div>
  );
}

export default Stars;