import { css } from 'iares';

export const styles = () => css`
  app-divider,
.wrap-ctx {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: center
}
.trace-ctx {
  display: flex;
  width: 100%;
  height:8px;
  justify-content: center;
  align-items: center;
  background:var(--dark-grey);
  border-radius:24px;
  margin:1em 0;
}

`;
