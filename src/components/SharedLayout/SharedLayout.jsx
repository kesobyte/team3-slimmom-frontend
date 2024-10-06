import React from 'react';
import abstract from '../../images/abstract.png';
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
          <div className="absolute right-0 bottom-0 -z-10">
            <img src={abstract} alt="abstract background" />
          </div>
          <div className="absolute right-0 -z-5">
            <img src={banana} alt="banana" />
          </div>
          <div className="absolute right-[2%] bottom-[5%] -z-4">
            <img src={strawberry} alt="strawberry" />
          </div>
          <div className="absolute right-[20%] -z-1">
            <img src={leaves} alt="leaves" />
          </div>
        </div>
      ) : (
        <div className="absolute right-0 -z-1">
          <img src={leaves2} alt="leaves" />
        </div>
      )}
    </div>
  );
};
