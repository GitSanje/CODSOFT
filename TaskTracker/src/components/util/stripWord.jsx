

export const stripWords = (word) => {
    const words = word.split("_");
    const w1 = words[0] ? words[0].toLowerCase() : "";
    const w2 = words[1] ? words[1].toLowerCase() : "";
  
    return [w1, w2];
  };
  


  // const getFirstWord = (taskName) => {
  //   return taskName.split("_").map((word) => word.charAt(0).toUperrCase());
  // };