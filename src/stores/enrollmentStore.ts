"use client";
import { Enrollment, PropEnrollmentStore } from "@/interfaces";
import api from "@/service/api";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useEnrollment = create<PropEnrollmentStore>((set) => ({
  enrollments: [],
  isLoading: false,

  getListEnrollments: async () => {
    set({ isLoading: true });
    await api
      .get("/enrollments")
      .then((response) => set({ enrollments: response.data }))
      .catch(() => toast.error("Erro ao buscar inscrições!"))
      .finally(() => set({ isLoading: false }));
  },

  getEnrollments: async (email: string) => {
    set({ isLoading: true });
    await api
      .get(`/enrollments?email=${email}`)
      .then((response) => set({ enrollments: response.data }))
      .catch(() => toast.error("Erro ao buscar inscrições!"))
      .finally(() => set({ isLoading: false }));
  },

  postEnrollment: async (data: Enrollment) => {
    set({ isLoading: true });
    await api
      .post("/enrollments", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Inscrição realizada com sucesso!");
          set((state) => ({
            enrollments: [...state.enrollments, response.data],
          }));
        } else {
          toast.error("Erro ao realizar inscrição, tente novamente!");
        }
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          toast.warning("Usuário já está inscrito nesse evento!");
        } else {
          toast.error("Erro ao realizar inscrição, tente novamente!");
        }
      })
      .finally(() => set({ isLoading: false }));
  },

  deleteEnrollment: async (id: string) => {
    set({ isLoading: true });
    await api
      .delete(`/enrollments/${id}`)
      .then(async (response) => {
        if (response.status === 204) {
          set((state) => ({
            enrollments: state.enrollments.filter((enrollment) => enrollment._id !== id),
          }));
          toast.success("Inscrição cancelada com sucesso!");
        }
      })
      .catch(() => toast.error("Erro ao cancelar inscrição, tente novamente!"))
      .finally(() => set({ isLoading: false }));
  },
}));
