import Header from "@/components/Header/Header";
import {headers} from "@/constants";

export default function Home() {
  return (
    <section className={''}>
      <Header title={headers.dashboard}/>

      <main className={'p-5'}>
        <div>Dashboard</div>
      </main>



    </section>
  );
}
