import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";
import schemas from './sanity/schemas'
const config = defineConfig({
    projectId: "p20np4gp",
    dataset: "production",
    title: "Personal Website",
    plugins: [deskTool()],
    basePath: "/admin",
    apiVersion: '2023-07-15',
    schema: {types: schemas}
});


export default config;