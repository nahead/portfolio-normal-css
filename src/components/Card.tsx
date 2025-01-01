import Image from 'next/image';
import React from 'react';
import '../app/style/card.css';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='card' data-aos="zoom-in-up">
      <div>
        <Image className='card-image'
          src={img}
          alt={title}
          width={350}
          height={350}
        />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card;