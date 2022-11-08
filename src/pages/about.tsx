/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface IProfileCard {
  username: string;
  name: string;
  linkedinUsername: string;
  emailID: string;
}

const ProfileCard = ({ username, name, linkedinUsername, emailID }: IProfileCard) => (
  <div className="w-1/4 p-4">
    <div className="bg-gray-100 p-4 rounded-lg">
      <img className="bg-orange h-60 rounded w-full object-cover object-center mb-6" src={`https://avatars.githubusercontent.com/${username}`} alt="content" />
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-center">{username}</h3>
      <h2 className="text-xl text-black font-medium title-font text-center">{name}</h2>
      <h3 className="text-indigo-500 text-sm font-medium title-font text-center mb-2 font-ubuntu">{'< Web Developer />'}</h3>
      <div className="flex flex-row justify-center w-full">
        <a href={`https://github.com/${username}`} target="_blank" className="m-1 pr-1" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
          </svg>
        </a>
        <a href={`https://www.linkedin.com/in/${linkedinUsername}`} target="_blank" className="m-1 pr-1" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
          </svg>
        </a>
        <a href={`mailto:${emailID}`} target="_blank" className="m-1" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const About = () => {
  const members = [
    {
      id: 1,
      name: 'Chandra Prakash',
      username: 'chandra8226',
      linkedinUsername: 'chandra-prakash-105225200',
      emailID: 'chandra8226@gmail.com',
    },
    {
      id: 2,
      name: 'Pinaki Bhattacharjee',
      username: 'pinakipb2',
      linkedinUsername: 'pinakipb2',
      emailID: 'pinakipb2@gmail.com',
    },
    {
      id: 3,
      name: 'Sai Shradha Lala',
      username: 'saishradhalala',
      linkedinUsername: 'sai-shradha-lala',
      emailID: 'saishradha1999@gmail.com',
    },
    {
      id: 4,
      name: 'Sakshi Gairola',
      username: 'grsakshi',
      linkedinUsername: 'sakshi-gairola-1188271a9',
      emailID: 'sakshi.g642001@gmail.com',
    },
  ];
  return (
    <div className="w-full bg-neutral-900 h-screen overflow-hidden">
      <nav className="pl-36 flex items-center justify-between flex-wrap pt-10 pr-28 pb-0">
        <Link href="/">
          <div className="m-0 p-0 hover:cursor-pointer">
            <Image src="/drewmart.svg" alt="DreWMart" width={200} height={50} />
          </div>
        </Link>
        <div className="w-full flex-grow flex lg:w-auto items-center justify-center ml-12">
          <div className="text-sm lg:flex-grow">
            <Link href="/about">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-10 hover:cursor-pointer font-semibold">About Us</span>
            </Link>
          </div>
          <div>
            <Link href="/login">
              <button className="inline-block text-base px-6 py-3 leading-none rounded-md text-white bg-green-600 mt-4 lg:mt-0 hover:bg-green-700 font-medium">LogIn</button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="w-full -pl-36">
        <div className="text-center mt-10 mb-3 text-4xl font-bold text-white font-ubuntu">About Us</div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {members.map(({ id, ...otherProps }) => (
              <ProfileCard key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
