import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center min-h-screen space-y-4">

      <h1 className="text-3xl font-bold ">Oops!</h1>
      <p className=" font-medium">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500 font-medium">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}