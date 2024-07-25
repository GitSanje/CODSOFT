
import { faPencilAlt, faClock, faFlag, faTasks } from '@fortawesome/free-solid-svg-icons';

export const getColor = (icon) => {
    switch (icon) {
      case faPencilAlt:
        return 'text-blue-500';
      case faClock:
        return 'text-yellow-500';
      case faFlag:
        return 'text-red-500';
      case faTasks:
        return 'text-green-700';
      default:
        return 'text-gray-500';
    }
  };
export const getFooterVal = (colType) => {
    switch (colType) {
      case "backlog":
        return "Incoming tasks, waiting to be done.";
      case "prioritized":
        return `prioritize the task and assign a due data to the task. `;
      case "doing":
        return 'Tasks being actively worked on.';
      case "onhold":
        return 'Cards on standby';
      default:
        return '';
    }
  };

