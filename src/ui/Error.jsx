import { useRouteError } from "react-router-dom";
// import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button to="-1">&larr; Go back</button>
    </div>
  );
}

export default Error;