import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

import "./styles/tailwind.css";

hydrate(<RemixBrowser />, document);
