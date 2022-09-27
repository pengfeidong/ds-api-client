import { DsApiClient } from "./index";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const { API_URL, API_TOKEN } = process.env;

describe("Dossier (unit)", () => {
  it("Has to retrieve dossier number ", async () => {
    const dsApiClient = new DsApiClient(API_URL, API_TOKEN);
    const response = await dsApiClient.dossier(2);
    expect(response).toEqual({
      dossier: {
        id: "RG9zc2llci0y",
      },
    });
  });
});
