import React from "react";
import clinet_pic from "../assets/img/person_1.jpg";

import '../css/card.css'
const CommentCard = ({ img, comment, By }) => {
  return (
    <>
      <div className="  flex flex-row jutify-center space-x-7 ">
        {/* Image */}
      
          <img
            src={img|| clinet_pic}
            alt=""
            className="rounded-full "
            style={{ width: "50px", height: "50px" }}
          />
          
        {/* Comment Card */}
        <div className="spike p-7 rounded-md ml-6  " style={{ background: "#333333" }}>
          <p className="text-base text-gray-500">
            {comment ||
              "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"}
          </p>
          <h1 className="text-base text-gray-600 pt-7">
            — {By || "Ethan McCown"}, CEO{" "}
            <span className="text-base text-lime-600">XYZ Inc.</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
