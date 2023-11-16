async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets");

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return <div>TicketList</div>;
}
