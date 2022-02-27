import { FC, memo, useEffect, useState } from 'react';
import Ticket from '../Ticket';

const TicketList: FC<any> = ({ tickets }) => {
  const [cachedTickets, setCachedTickets] = useState(tickets);

  useEffect(() => {
    setCachedTickets(tickets);
  }, [tickets]);

  return cachedTickets.map((ticket: any, index: number) => (
    <Ticket key={ticket?.id} ticket={ticket} index={index} />
  ));
};

export default memo(TicketList);
