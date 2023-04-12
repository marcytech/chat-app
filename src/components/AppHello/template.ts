import { html } from "iares";
import { Ttemplate } from "./types";

import { AppContent } from "@/components/AppContent";

export const template: Ttemplate = ({ props }) => html`
  <${AppContent}>
    <slot target="content">
      <h1>hello IARES, it's a world!</h1>
    </slot>
  </>
`;
