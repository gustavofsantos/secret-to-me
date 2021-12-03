import { signIn, signOut, useSession } from "next-auth/react";
import { When } from "../components/when";

export default function IndexPage() {
  const { status, data } = useSession();
  return (
    <article>
      <h1>Index page</h1>
      <When value={status === "authenticated"}>
        {() => <button onClick={() => signOut()}>log out</button>}
      </When>
      <When value={status === "unauthenticated"}>
        {() => (
          <button onClick={() => signIn("github")}>Continue with GitHub</button>
        )}
      </When>

      <When value={status === "loading"}>{() => <span>loading...</span>}</When>
    </article>
  );
}
