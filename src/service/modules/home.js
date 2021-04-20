import server from "../request";
export default server({
  getData: { method: "get", url: "/api/web/v1/index" },
});
