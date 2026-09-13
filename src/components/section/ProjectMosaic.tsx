import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export type ProjectMosaicItem = {
  image: string;
  imageAlt: string;
  location: string;
  title: string;
  meta?: string;
  href?: string;
  imagePosition?: string;
};

export type ProjectMosaicProps = {
  items: ProjectMosaicItem[];
  className?: string;
};

/** Editorial reference gallery with one dominant image and supporting projects. */
export const ProjectMosaic = ({ items, className = "" }: ProjectMosaicProps) => (
  <div className={`project-mosaic${className ? ` ${className}` : ""}`}>
    {items.map((item, index) => (
      <article className="project-mosaic__item" key={`${item.location}-${item.title}-${index}`}>
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 58vw"
          style={{ objectFit: "cover", objectPosition: item.imagePosition ?? "center" }}
        />
        <div className="project-mosaic__shade" aria-hidden="true" />
        <div className="project-mosaic__caption">
          <span>{item.location}</span>
          <h3>{item.title}</h3>
          {item.meta ? <p>{item.meta}</p> : null}
        </div>
        {item.href ? (
          <a className="project-mosaic__link" href={item.href} aria-label={`${item.title} – részletek`}>
            <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
          </a>
        ) : null}
      </article>
    ))}
  </div>
);
