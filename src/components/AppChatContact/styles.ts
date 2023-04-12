import { css } from 'iares';

export const styles = () => css`
  app-chat-contact{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
    background: var(--purple);
    padding:1em 0;
	}

	.wrap-ctx {
		display: grid;
    grid-template-columns: 48px 1fr 48px 48px;
    width:100%;
		font-weight: bold;
		color: var(--white);
	}

	.contact-ctx > h1 {
    display: flex;
		justify-content: flex-start;
		width: 100%;
    margin-bottom: 0.5em;
    font-size:1em;
    font-weight: 600;
    text-transform: uppercase;
	}
  
  .contact-ctx > span {
    font-weight: normal;
    font-size: 0.875em;
  }

  
  .align-right-ctx {
    text-align: right
  }
`;
