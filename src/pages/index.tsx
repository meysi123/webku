
import Link from "next/link";
import {useState} from "react";

export default function Home() {
  const [ukuran, setUkuran] = useState(200)
  return (
    <>
    <Link href="/biodata">ke halaman biodata </Link>
      Meysi Rahmiyanti
      <br />
      <b>universitas</b> <br />
      <img width={ukuran} src="/reply 1988.png" /> <br />
      {ukuran} <br />
      <button onClick={()=>{
        setUkuran(ukuran + 5)
      }}>Tambah Ukuran</button>
      <button onClick={()=>{
        setUkuran(ukuran - 5)
      }}>Kurangi Ukuran</button>

    </>
  );
}
