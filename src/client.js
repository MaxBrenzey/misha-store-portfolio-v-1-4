import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "nxef941d",
  dataset: "production",
  useCdn: true,
})