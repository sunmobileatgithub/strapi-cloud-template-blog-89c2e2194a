/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor from "@ckeditor/strapi-plugin-ckeditor/strapi-admin";
import contentVersioning from "@notum-cz/strapi-plugin-content-versioning/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    ckeditor: ckeditor,
    "content-versioning": contentVersioning,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "import-export-entries": importExportEntries,
  },
});
