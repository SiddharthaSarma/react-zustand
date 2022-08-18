import create from "zustand";

export const usePeopleStore = create((set) => ({
  people: ["sid", "siddu"],
  addPeople: (name) =>
    set((state) => ({
      people: [...state.people, name]
    })),
}));


