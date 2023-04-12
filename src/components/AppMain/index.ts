import { html, css } from 'iares';
import { TcomponentFactory } from './types';

const styles = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    width:100vw;
    height: 100vh
  }
`;

const template = () => html`
  <div class="wrap-ctx">
    <router-view></router-view>
  </div>
`;

export const AppMain: TcomponentFactory = () => {
  return {
    template,
    styles,
  };
};
