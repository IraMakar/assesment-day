import { $host } from "./index";

export const createPeople = async (people) => {
  const { data } = await $host.post("api/people", people, {
    headers: {"Access-Control-Allow-Origin": "*"}
  });
  return data;
};

export const fetchPeople = async (page, limit = 4) => {
  // const { data } = await $host.get("api/people?limit=4");
  const { data } = await $host.get("api/people", {headers: {"Access-Control-Allow-Origin": "*"}, params: {
    page, limit
  }});
  return data;
};

export const fetchOnePeople = async (id) => {
  const { data } = await $host.get("api/people/" + id, { headers: {"Access-Control-Allow-Origin": "*"} });
  return data;
};

export const updatePeople = async (body = {}) => {
  const { data } = await $host.put("api/people/update", body, {headers: {"Access-Control-Allow-Origin": "*"}});
  return data;
};

export const updateOnePeople = async ({ id, sum_mark }) => {
  const { data } = await $host.put("api/people/update/" + id, {
    sum_mark,
  }, { headers: {"Access-Control-Allow-Origin": "*"} });
  return data;
};

export const deleteOnePeople = async (id) => {
  const { data } = await $host.delete("api/people/delete/" + id, {
    headers: {"Access-Control-Allow-Origin": "*"}
  });
  return data;
};
// export const deleteOnePeople = async ({ id }) => {
//   const { data } = await $host.put("api/people/delete/" + id);
//   return data;
// };
//TEST
// export const deleteOnePeople = async (id) => {
//   const { data } = await $host.put("api/people/delete", {params: {
//   id,
// }} );
//   return data;
// };
