import { html } from 'iares';
import { Ttemplate } from './types';
import { AppChatContact } from '@/components/AppChatContact';
import { AppContent } from '@/components/AppContent';
import { AppChatMessage } from '@/components/AppChatMessage';

export const template: Ttemplate = ({ props }) => {
  return html`
    <div class="wrap-ctx">
      <${AppChatContact} />
      <div class="content-ctx">
        <${AppContent}>
          <slot target="content"> 
          <div>
            <${AppChatMessage} reverse=${false}/>
            <${AppChatMessage} reverse=${true}/>
            <${AppChatMessage} reverse=${false}/>
          </div>
          </slot>
        </${AppContent}>
      </div>
    </div>
  `;
};
