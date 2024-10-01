import Image from "next/image";
import Header from '../app/components/header';
import Profile from "./components/profile";


export default function Home() {
  return (
    <div>
        <Header/>
        <Profile/>
    </div>
  );
}
