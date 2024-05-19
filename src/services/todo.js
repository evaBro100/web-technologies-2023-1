import api from "./api.js";

export default class Todos {
  static async create(description) {
    try {
      const { data } = await api("/todo", {
        method: "POST",
        body: JSON.stringify({ description: description }),
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getById(id) {
    try {
      const { data } = await api(`/todo/${id}`, { method: "GET" });
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getAll() {
    try {
      const { data } = await api("/todo");
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async updateStatusById(id, completed) {
    try {
      const { data } = await api("/todo/" + id, {
        method: "PUT",
        body: JSON.stringify({ completed: completed }),
      });
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  static async deleteById(id) {
    try {
      return await api("/todo/" + id, { method: "DELETE" });
    } catch (e) {
      console.log(e);
    }
  }
}
