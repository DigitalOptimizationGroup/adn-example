import config from "../dog-app-config.json";
import { setup } from "@digitaloptgroup/adn-apps-cra/lib/script";
import assets from "./client-assets";

export const handler = setup({ ...config, assets });
