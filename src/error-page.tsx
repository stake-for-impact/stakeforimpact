import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const routeerror = useRouteError();
  console.error(routeerror);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routeerror.statusText || routeerror.message}</i>
      </p>
    </div>
  );
}