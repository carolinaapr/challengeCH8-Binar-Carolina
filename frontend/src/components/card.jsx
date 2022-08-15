import React from "react";

const Card = ({username = null, email = null, exp = null, lvl=null}) => {
   return (
    <div className="bg-white w-full px-8 py-4 rounded-xl shadow-md border-l-4 border-green-600">
      <h1 className="font-semibold text-[16px]">Player Card</h1>
      <div className="flex gap-1">
        <div className="w-[20%] flex justify-between">
          Username<span>: </span>{' '}
        </div>
        <div className="w-[80%] ">{username}</div>
      </div>
      <div className="flex gap-1">
        <div className="w-[20%] flex justify-between">
          Email<span>: </span>{' '}
        </div>
        <div className="w-[80%] ">{email}</div>
      </div>
      <div className="flex gap-1">
        <div className="w-[20%] flex justify-between">
          Experience<span>: </span>{' '}
        </div>
        <div className="w-[80%] ">{exp}</div>
      </div>
      <div className="flex gap-1">
        <div className="w-[20%] flex justify-between">
          Level<span>: </span>{' '}
        </div>
        <div className="w-[80%] ">{lvl}</div>
      </div>
    </div>
   );
};