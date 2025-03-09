"use client";
import { useEffect, useMemo } from "react";
import { Enrollments } from "./styled";
import { useSession } from "next-auth/react";
import CardMyEnrollments from "../cards/cardMyEnrollments";
import { SetPagination } from "@/utils/pagination";
import { useEnrollment } from "@/stores/enrollmentStore";
import Pagination from "../pagination";
import { useEvent } from "@/stores/eventStore";
import { useUser } from "@/stores/userStore";

export default function MyEnrollments() {
  const { enrollments, getEnrollments } = useEnrollment();
  const { data: session } = useSession();

  useEffect(() => {
    getEnrollments(session?.user.email || "");
  }, [session?.user.email, enrollments]);

  const userEnrollments = useMemo(() => {
    return enrollments.filter(
      (enrollment) => enrollment.enrollment.email === session?.user.email
    );
  }, [enrollments, session]);

  const orderOfRegistration = useMemo(() => {
    return [...userEnrollments].sort((a, b) => {
      const dataA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dataB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dataB - dataA;
    });
  }, [userEnrollments]);

  const {
    paginatedEvents: paginatedEnrollments,
    itemsPorPage,
    totalPages,
    currentPage,
    handlePageClick,
  } = SetPagination({ events: orderOfRegistration });

  const isEnrolled = useMemo(() => {
    return enrollments.filter(
      (enrollment) => enrollment.enrollment.email === session?.user.email
    );
  }, [enrollments, session]);

  return (
    <Enrollments>
      <div className="total-enrollments">
        <p>Total de eventos inscritos: {userEnrollments.length || 0}</p>
      </div>
      {userEnrollments.length > 0 ? (
        paginatedEnrollments.map((enrollment) => (
          <CardMyEnrollments
            key={enrollment._id}
            enrollment={enrollment}
            bgColor="--white"
            color="--blue-dark"
            hover="--drop-shadow-blue-hover"
          />
        ))
      ) : (
        <h3>Nenhuma inscrição encontrada</h3>
      )}
      {isEnrolled && enrollments.length > itemsPorPage && (
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
