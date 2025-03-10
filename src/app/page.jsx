// import logo from '../../logo.svg';
import Link from "next/link";

function Home() {
  return (
    <div className="App">
      <Link className="text-white" href={"/project"}>My projects</Link>
    </div>
  );
}

export default Home;