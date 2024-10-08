import React from 'react';
import abstract from '../../images/abstract.png';
import rectangle from '../../images/rectangle.png';
import banana from '../../images/banana.png';
import strawberry from '../../images/strawberry.png';
import leaves from '../../images/leaves.png';
import leaves2 from '../../images/leaves-2.png';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="relative h-[100vh] w-[100vw]">
      {!isLoggedIn ? (
        <div>
          <div className="absolute xl:right-0 xl:bottom-0 right-[-2%] bottom-[-15%] md:block hidden -z-10">
            <img
              src={abstract}
              alt="abstract background"
              className="w-[500px] xl:w-full"
            />
          </div>
          <div className="absolute right-0 xl:top-0 bottom-[-10%] md:block hidden -z-5">
            <img src={banana} alt="banana" className="w-[450px] xl:w-full" />
          </div>
          <div className="absolute xl:right-[2%] xl:bottom-[5%] right-[6%] bottom-[25%] md:block hidden -z-4">
            <img
              src={strawberry}
              alt="strawberry"
              className="w-[250px] xl:w-full"
            />
          </div>
          <div className="absolute xl:right-[20%] xl:bottom-auto right-[30%] bottom-[-3%] md:block hidden -z-1">
            <img
              src={leaves}
              alt="leaves"
              className="w-[500px] xl:w-full xl:rotate-0 rotate-90"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="absolute right-0 xl:bottom-0 bottom-[-160px] md:block hidden -z-1">
            <img src={leaves2} alt="leaves" className="xl:rotate-0 rotate-90" />
          </div>
          {/* <div className="absolute right-0 bottom-0 -z-10 h-full w-auto">
            <img
              src={rectangle}
              alt="rectangle"
              className="xl:h-full xl:w-[35vw] xl:block hidden object-cover"
            />
          </div> */}
        </div>
      )}
    </div>
  );
};
