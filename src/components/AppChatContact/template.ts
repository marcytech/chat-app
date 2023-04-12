import { html } from 'iares';
import { Ttemplate } from './types';
import { AppContent } from '@/components/AppContent';

export const template: Ttemplate = ({ props }) => {
  return html`
  <${AppContent}>
    <slot target="content" ctx="app-chat-contact">
      <div class="wrap-ctx">
        <i class="material-symbols-rounded"> keyboard_backspace </i>
        <div class="contact-ctx">
          <h1>Marciely Ribeiro</h1>
          <span>+55 41 98465-5635</span>
        </div>
        <div class="align-right-ctx">
          <i class="material-symbols-rounded"> notifications_active </i>
        </div>
        <div class="align-right-ctx">
          <i class="material-symbols-rounded"> more_vert </i>
        </div>
      </div>
    </slot>
  </>
  `;
};
