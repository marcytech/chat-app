import { html } from "iares";
import { Ttemplate } from "./types";

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`;
