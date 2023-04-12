import { html } from 'iares';
import { Ttemplate } from './types';
import { AppContact } from '@/components/AppContact';
import { AppListContact } from '@/components/AppListContact';

export const template: Ttemplate = ({ props }) => {
  return html`
  <div class="wrap-ctx">
    <div class="contact-ctx">
    <span class="material-symbols-rounded"> keyboard_backspace </span>
    <h1>
        Add Contacts
      </h1>
    </div>
    <${AppContact}/>
    <${AppListContact} />
  </div>
  `;
};
