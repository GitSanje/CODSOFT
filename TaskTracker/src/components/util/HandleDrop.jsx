
// First try naive approach


// const handleOnDropBacklog = (e) => {
//     // Set the dropped task to Backlog state
//       if(Backlog){
//         setBacklog([...Backlog.filter(
//           (taskName) => taskName !== e.dataTransfer.getData("text")
//         ),
//           e.dataTransfer.getData("text")])
//       }else {
//         setBacklog([e.dataTransfer.getData("text")])
//     }
    

//     // If dropping from Backlog --> Prioritized
//         // Delete from Backlog
//         Prioritized?.foreach((task) => {
//         if(task === e.dataTransfer.getData("text")){
//           setBacklog([
//             ...Prioritized.filter(
//               (taskName) => taskName !== e.dataTransfer.getData("text")
//             )
//           ])
//         }
//       })
//       Doing?.foreach((task) => {
//         if(task === e.dataTransfer.getData("text")){
//           setBacklog([
//             ...Doing.filter(
//               (taskName) => taskName !== e.dataTransfer.getData("text")
//             )
//           ])
//         }
//       })
//   }





//    const handleOnDropPrioritized = (e) => {
//       if(Prioritized){
//         setPrioritized([...Prioritized.filter(
//           (taskName) => taskName !== e.dataTransfer.getData("text")
//         )
//         , e.dataTransfer.getData("text")])
//       }else {
//         setPrioritized([e.dataTransfer.getData("text")])
        
//     }


//     Backlog?.foreach((task) => {
//       if(task === e.dataTransfer.getData("text")){
//         setBacklog([
//           ...Backlog.filter(
//             (taskName) => taskName !== e.dataTransfer.getData("text")
//           )
//         ])
//       }
//     })
//   }
//    const handleOnDropDoing= (e) => {
//       if(Doing){
//         setDoing([...Doing.filter(
//           (taskName) => taskName !== e.dataTransfer.getData("text")
//         ), e.dataTransfer.getData("text")])
//       }else {
//         setDoing([e.dataTransfer.getData("text")])
//     }
//   }
//    const handleOnDropOnHold = (e) => {
//       if(onHold){
//         setOnHold([...onHold.filter(
//           (taskName) => taskName !== e.dataTransfer.getData("text")
//         )
//         , e.dataTransfer.getData("text")])
//       }else {
//         setOnHold([e.dataTransfer.getData("text")])
//     }
//   }
   


//// 2nd try reduce some repition approach

    //  const handleOnDropBacklog = (e) => {
  //   e.preventDefault();
  //   const task = e.dataTransfer.getData("text");
  //   if (task) {
  //     setBacklog((prev) => [...prev, task]);
  //     removeTaskFromOtherColumns(task);
  //   }
  // }

  // const handleOnDropPrioritized = (e) => {
  //   e.preventDefault();
  //   const task = e.dataTransfer.getData("text");
  //   if (task) {
  //     setPrioritized((prev) => [...prev, task]);
  //     removeTaskFromOtherColumns(task);
  //   }
  // }

  // const handleOnDropDoing = (e) => {
  //   e.preventDefault();
  //   const task = e.dataTransfer.getData("text");
  //   if (task) {
  //     setDoing((prev) => [...prev, task]);
  //     removeTaskFromOtherColumns(task);
  //   }
  // }

  // const handleOnDropOnHold = (e) => {
  //   e.preventDefault();
  //   const task = e.dataTransfer.getData("text");
  //   if (task) {
  //     setOnHold((prev) => [...prev, task]);
  //     removeTaskFromOtherColumns(task);
  //   }
  // }

  // const removeTaskFromOtherColumns = (task, currentColumn) => {
  //   const columnSetters = [setBacklog, setPrioritized, setDoing, setOnHold];
  //   columnSetters
  //     .filter((setter) => setter !== currentColumn)
  //     .forEach((setter) => {
  //       setter((prev) => prev.filter((t) => t !== task));
  //     });
  // };

  // const handleOnDrop = (columnSetter, task) => {
  //   columnSetter((prev) => prev.filter((t) => t !== task));
  //   columnSetter((prev) => [...prev, task]);
  //   removeTaskFromOtherColumns(task, columnSetter);
   
    
  // };

  // const handleOnDrops = (columnSetter) => (e) => {
  //   const task = e.dataTransfer.getData("text");
  //   if (task) {
  //     handleOnDrop(columnSetter, task);
  //   }
  // };