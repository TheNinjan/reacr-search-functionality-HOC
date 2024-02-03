import { useRouteError } from "react-router-dom";
import Header from "./Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <center id="error-page">
      <Header />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </center>
  );
}
