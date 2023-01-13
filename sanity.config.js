import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

import category from "./schemas/category";
import restaurant from "./schemas/restaurant";
import dish from "./schemas/dish";
import featured from "./schemas/featured";

export default defineConfig({
  name: "default",
  title: "get",

  projectId: "5wv99ner",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([
    restaurant,
    category,
    dish,
    featured,
  ]),
  },
});
