import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col p-8 h-screen bg-white" id="ComingSoon">
      <div className="m-auto font-light text-center space-y-5 text-7xl text-black sm:text-7xl md:text-8xl xl:text-9xl">
        <h1>Coming soon</h1>
        <p className="text-4xl tracking-wide">~ This website is still in the development ~</p>
      </div>
      <div className="bg-white flex flex-col sm:flex-row justify-between font-semibold text-base text-black">
        <h1>
          &copy; 2025 BARR <i>Foundation, Inc.</i> All rights reserved.
        </h1>
        <h1>Powered by BARR Office</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
