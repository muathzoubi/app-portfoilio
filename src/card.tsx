import React from 'react';
import { useState } from 'react';

const Card = (props: { imgSrc: string; title: any; rate?: string }) => {
  const [isHoverd, setIsHover] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="text">
        <h2
          style={{
            transition: 'all 1s',
            opacity: isHoverd ? 1 : 0,
          }}
        >
          {props.title}
        </h2>
        <p className="read-the-docs">
          app descrption app descrption app descrption{' '}
        </p>
        <img
          alt="nae"
          title="tye"
          style={{
            position: 'absolute',

            transition: 'all 1s',

            width: 300,
            height: 245,
            opacity: isHoverd ? '0' : '1',
          }}
          src={props.imgSrc}
        />
      </div>
      <div className="icons">
        <a className="btn" href="#">
          <img src="./ic-github.svg" width={22} />
        </a>
      
        <a className="btn" href="#">
          <img src="./ic-link.png" width={22} />
        </a>
      </div>
    </div>
  );
};
export default Card;
