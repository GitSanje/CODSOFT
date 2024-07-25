import React from "react";
import NewTask from "../Layout/NewTask";
import Column from "../Layout/Column";

const Page = () => {
  return (
    <>
      <NewTask/>
      <div className="pt-16 px-8  h-screen ">
        <div className="grid grid-cols-4 gap-8 min-w-max">
          <Column />
          <Column />
          <Column />
          <Column islast={true} />
        </div>
      </div>
    </>
  );
};

export default Page;
