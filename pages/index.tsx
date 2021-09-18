import { Header } from '../components/Header';
import { TicketsList } from '../components/TicketsList/';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Axiona-Tickets</title>
      </Head>
      <Header />
      <TicketsList />
    </>
  );
}
