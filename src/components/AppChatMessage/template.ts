import { html } from 'iares';
import { Ttemplate } from './types';
import { AppAvatar } from '@/components/AppAvatar';

export const template: Ttemplate = ({ props }) => html`
  <div class="wrap-ctx ${props.reverse ? 'reverse-ctx' : ''}">
  <div class="message-ctx">
    <p>
    Lorem ip Lorem ipsum Loremip Lorem ipsum dadipisicing elit Vitae. Lorem ip Lorem
    </p>
    <span>10 min</span>
  </div>
  <div class="avatar-ctx">
    <${AppAvatar} />  
  </div>
  </div>
`;
