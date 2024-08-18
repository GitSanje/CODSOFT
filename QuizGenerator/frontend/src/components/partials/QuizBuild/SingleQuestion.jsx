import { forwardRef } from "react";


const SingleQuestion = forwardRef(({ questionIndex, value, onChange }, ref) => {
    return (
      <div className="w-full">
        <div className="flex items-center gap-3">
          <div className="flex gap-2 border-gray-200">
            <span>Questions</span>
            <span>{questionIndex + 1}</span>
          </div>
          <textarea
            className="border border-gray-200 rounded-md p-2 ml-3
                  w-full outline-none resize-none"
            placeholder="Your Question here ..."
            value={value}
            onChange={onChange}
            ref={ref}
          ></textarea>
        </div>
      </div>
    );
  });

  export default SingleQuestion;
  
  