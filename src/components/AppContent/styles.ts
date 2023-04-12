import { css } from 'iares';

export const styles = () => css`
  app-content {
    justify-content: center;
  }
  app-content,
  .wrap-ctx {
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    width:100%;
  }

  .wrap-ctx {
    justify-content: flex-start;
    max-width:1216px;
    padding:0 1em;
  }
`;
