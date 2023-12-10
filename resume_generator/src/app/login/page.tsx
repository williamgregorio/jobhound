import Header from "../components/Header";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Header />
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
      <span>
        New here? Create an <Link href="/signup">account</Link>
      </span>
    </div>
  );
}
