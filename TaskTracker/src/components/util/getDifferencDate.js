// Start Date: March 15, 2022
// End Date: March 15, 2024

// Start Date: March 15, 2022
// End Date: February 15, 2024

// Start Date: March 15, 2022
// End Date: March 14, 2023
export const getDifferenceInDate = (startDate, endDate) => {
    // Convert inputs to Date objects if they aren't already
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculate initial year difference
    let years = end.getFullYear() - start.getFullYear();
    
    // Adjust year difference if the end date hasn't reached the month/day of the start date
    if (end.getMonth() < start.getMonth() ||
        (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) {
      years--;
    }
    
    // Calculate remaining months difference after adjusting years
    let months = end.getMonth() - start.getMonth();
    if (end.getDate() < start.getDate()) {
      months--;
    }
    
    // If the year difference is less than 1
    if (years < 1) {
      // If the month difference is less than 1
      if (months < 1) {
        // Calculate days difference
        const days = end.getDate() - start.getDate();
        if (days < 1) {
          // Calculate hours difference
          const hours = end.getHours() - start.getHours();
          return hours > 0 ? `${hours} hours` : "Less than an hour";
        }
        return `${days} days`;
      }
      return `${months} months`;
    }
  
    // If years are 1 or more, return years and remaining months
    return `${years} years ${months} months`;
  };
  

