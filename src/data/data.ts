import { Report } from "../types/types";

export const data: Report[] = [
  {
    header: [
      { id: "project_name", type: "string", caption: "Project name" },
      { id: "total_by_project", type: "float", caption: "Total by project" },
      {
        id: "project_type",
        type: "string",
        caption: "Project type",
        align: "center",
      },
      { id: "jan", type: "float", caption: "Jan" },
      { id: "feb", type: "float", caption: "Feb" },
    ],
    data: [
      ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
      ["Mako", 2345.1, "internal", 3465.3, { data: 12.5, color: "selected" }],
      ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
    ],
  },
  {
    header: [
      { id: "project_name", type: "string", caption: "Project name" },
      { id: "total_by_project", type: "float", caption: "Total by project" },
      {
        id: "project_type",
        type: "string",
        caption: "Project type",
        align: "center",
      },
      { id: "mar", type: "float", caption: "Mar" },
      { id: "apr", type: "float", caption: "Apr" },
    ],
    data: [
      ["Mimesis", 1044.3, "commercial", 2148.2, 4196.0],
      ["Mako", 2445.1, "internal", 3565.3, { data: 15.5, color: "selected" }],
      ["Edelweiss", 64.4, "commercial", 574.8, 4752.3],
    ],
  },
];
