"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

export type GoogleReview = {
  author: string;
  text: string;
  date?: string;
};

export type GoogleReviewsProps = {
  reviews?: GoogleReview[];
};

const REVIEWS: GoogleReview[] = [
  {
    author: "Orsolya Németh",
    date: "2 éve",
    text: "A fiúk nagyon gyorsak és szakszerűen voltak. Minden kérdésemre tudtak választ adni",
  },
  {
    author: "Dániel Fischer",
    date: "2 éve",
    text: "Az A1 Solar egy megbízható napelemes cég, amely kiváló minőségű munkát végez. A napelemes rendszer telepítése szépen kivitelezett, elégedett vagyok a teljes folyamattal. A kommunikáció hatékony és a csapat szakértői profik. Ajánlom őket mindenkinek, aki napelemes rendszert szeretne telepíttetni! 🥳🔌👍",
  },
  {
    author: "Károly Hagymás",
    date: "2 éve",
    text: "Köszönjük a gyors pontos barátságos kivitelezők munkáját !!! Nagyon elégedettek vagyunk minden információt megkaptuk. Köszönjük szépen Tisztelettel Hagymás Család!!!",
  },
  {
    author: "Rob Ferencz",
    date: "5 éve",
    text: "Korrekt gyors tervezés, hatékony engedélyezés! A 4,9-es rendszer 3 hónapja működik, kb. 2 000 kW az eddigi termelés!",
  },
  {
    author: "István Kiss",
    date: "6 éve",
    text: "Profi, ügyes csapat. 3 hónap alatt meglett minden a hitelügyintézéssel együtt. A kommunikáció is rendben volt velük. Ajánlom!",
  },
  {
    author: "László Sára",
    date: "5 éve",
    text: "Maximálisan elégedett voltam az A1 Solar Kft. munkájával. Az ajánlatadás gyors és korrekt volt, ahogy a felmérés és a kivitelezés is. Minden terhet levettek a vállamról és a teljes adminisztratív ügyintézést is megoldották, miközben kérés nélkül is folyamatosan tájékoztattak az ügy haladásáról. Első osztályú munkát végeztek!",
  },
  {
    author: "Bálint Tóth",
    date: "5 éve",
    text: "Korrekt, megbízható cég! Köszönöm a mindenre kiterjedő tájékoztatást, profi tervezés és kivitelezést.",
  },
  {
    author: "József Pék",
    date: "Szerkesztve: 2 hónapja",
    text: "Szuper Csapat! A megbeszéltek szerint korrekt gyors kivitelezésben volt részünk! 1 nap alatt 11,8 kW rendszert telepítettek, próba üzem hibátlanul megtörtént. Korrekt gyors ügyintézés mint terepen, mint a papírmunkában. Bármilyen kérdésem volt azonnal válaszoltak rá. A tervezett szerelési időpontot maradéktalanul betartották. Ár-érték arányban megfelelő a rendszer. Mindenkinek csak ajánlani tudom.",
  },
  {
    author: "Zsolt Sebestyén",
    date: "3 éve",
    text: "Ajánlom mindenkinek a céget, csak pozitívot tudok írni. A kérdéseimre azonnal (néhány esetben szabadság alatt is), telefonon és e-mailben is kaptam választ. Ha nem tudták felvenni, visszahívtak. Személyesen is voltam náluk, az egész csapat kedves volt, mindig türelmesen válaszoltak, segítettek. Az ügyintézés a részükről gyorsan ment, minden lépésnél igyekeztek a leggyorsabban teljesíteni. Az Elmű-ről ez nem teljesen mondható el. A rendszer azóta elkészült, a szerelő csapat kedves és szakszerű volt. A rendszer azóta „sikerült” az Elműnek is bekapcsolnia és gond nélkül működik.",
  },
  {
    author: "Kun Miklós",
    date: "5 éve",
    text: "A február elején történt szerződéskötés után pár nappal már elkészült az engedélyezési dokumentáció. Bár az idei első félévben a támogatások miatt nagy a megrendelés állomány, május elején – gyakorlatilag néhány óra alatt – elkészült a kivitelezés. A vállalkozás munkatársai elérhetőek (akadályoztatásuk esetén mindig visszahívtak), emailben is rendben működik a kommunikáció. A számlázás is a szerződés szerint történt. A kivitelezést végző szakemberek udvariasak, egyedi kérés esetén közreműködőek. Mindemellett a cég versenyképes áron végezte el a munkát.",
  },
];

export const GoogleReviews = ({ reviews = REVIEWS }: GoogleReviewsProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.86, 430), behavior: "smooth" });
  };

  return (
    <section className="google-reviews" aria-labelledby="google-reviews-title">
      <div className="container">
        <div className="google-reviews__header">
          <div>
            <span className="google-reviews__eyebrow">Google értékelések</span>
            <h2 id="google-reviews-title">Rólunk mondták</h2>
          </div>
          <div className="google-reviews__controls" aria-label="Vélemények lapozása">
            <button type="button" aria-label="Előző vélemények" onClick={() => move(-1)}><ArrowLeft size={20} /></button>
            <button type="button" aria-label="Következő vélemények" onClick={() => move(1)}><ArrowRight size={20} /></button>
          </div>
        </div>
        <div className="google-reviews__track" ref={trackRef} tabIndex={0}>
          {reviews.map((review, index) => (
            <article className="google-reviews__card" key={`${review.author}-${index}`}>
              <div className="google-reviews__author">
                <span className="google-reviews__avatar" aria-hidden="true">{review.author.charAt(0)}</span>
                <div><strong>{review.author}</strong>{review.date ? <span>{review.date}</span> : null}</div>
                <span className="google-reviews__google" aria-label="Google">G</span>
              </div>
              <div className="google-reviews__stars" aria-label="5 csillagos értékelés">
                {Array.from({ length: 5 }, (_, star) => <Star key={star} size={19} fill="currentColor" strokeWidth={1.5} />)}
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
