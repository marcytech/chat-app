import { css } from 'iares';

export const styles = () => css`
  app-chat,
	.wrap-ctx {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
	}
  .content-ctx {
    display: flex;
    flex-wrap:wrap;
    align-items: flex-start;
    width:100%;
    position: relative
  }
  .content-ctx:before {
    content:"";
    height:36px;
    width:100%;
    background: var(--purple)
  }
  .content-ctx:after {
    content:"";
    height:36px;
    width:100%;
    background: var(--white);
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    position: absolute;
    top:0;
    left:0;
  }
`;
