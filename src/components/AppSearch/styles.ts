import { css } from 'iares';

export const styles = () => css`
  app-search,
	.wrap-ctx {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.wrap-ctx {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding: 1.5em 1.5em;
		font-size: 20px;
		font-weight: bold;
		color: var(--white);
		background:var(--purple);
		border-radius: 0 0 40px 40px;
	}

	.wrap-ctx > h1 {
		display: flex;
		justify-content: center;
		width: 100%;
    margin-bottom: 1em;
    font-size:1.2em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px
	}

  .wrap-ctx > label {
    display: flex;
    width:100%;
    position: relative;
  }

	.wrap-ctx > label > input {
		display: flex;
		font-size: 16px;
		padding: 1em 1em 1em 3em;
		width: 100%;
		background: var(--white-light);
		border-radius: 28px;
		border: none;
	}

	.wrap-ctx > label > i {
		position: absolute;
		top: 50%;
		left: 0.8em;
		color: var(--light-gray);
		font-weight: bold;
    transform: translateY(-50%)
	}
`;
