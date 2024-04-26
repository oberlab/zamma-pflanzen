import type {
  Datei,
  DownloadFile,
  DownloadFilesResponse,
} from "../types/StrapiResponse";
import { STRAPI_URL } from "./config";

export async function getDownloadFiles(): Promise<DownloadFile[]> {
  const response = await fetch(`${STRAPI_URL}/api/downloads?populate=Datei`);
  const data: DownloadFilesResponse = await response.json();

  var ret: DownloadFile[] = [];

  data.data.map((d) => {
    ret.push({
      id: d.id,
      Titel: d.attributes.Titel,
      Datei: STRAPI_URL + d.attributes.Datei.data.attributes.url,
    });
  });

  return ret;
}
