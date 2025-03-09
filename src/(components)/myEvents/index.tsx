"use client";
import { useEffect } from "react";
import Pagination from "../pagination";
import { Enrollments } from "../mySubscription/styled";
import { PropsForm, User } from "@/interfaces";
import { useEvent } from "@/stores/eventStore";
import { SetPagination } from "@/utils/pagination";
import CardMyEvents from "../cards/cardMyEvents";

export default function MyEvents({ user }: PropsForm) {
  const { events, getCreatorEvents } = useEvent();

  const eventsOrdered = [...events].sort((a, b) => {
    const dataA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dataB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dataB - dataA;
  });

  const {
    paginatedEvents: paginatedEvents,
    itemsPorPage,
    totalPages,
    currentPage,
    handlePageClick,
  } = SetPagination({ events: eventsOrdered });

  useEffect(() => {
    getCreatorEvents(user?.email || "");
  }, [user?.email, events]);

  return (
    <Enrollments>
      <div className="total-enrollments">
        <p>Total de eventos: {events.length}</p>
      </div>
      {events.length > 0 ? (
        paginatedEvents.map((event) => (
          <CardMyEvents
            key={event._id}
            event={event}
            bgColor="--white"
            color="--blue-dark"
            hover="--drop-shadow-blue-hover"
          />
        ))
      ) : (
        <h3>Você não tem evento cadastrado</h3>
      )}

      {events.length > itemsPorPage && (
        <Pagination
          color="--white"
          colorHover="--blue-dark"
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      )}
    </Enrollments>
  );
}
