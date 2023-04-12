import { css } from 'iares';

export const styles = () => css`
	app-signin,
	.wrap-ctx {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		justify-content: center;
	}

	.wrap-ctx {
		padding: 0 1em;
	}

	.wrap-ctx > img {
		width: 120px;
		height: 120px;
		border-radius: 100px;
	}

	.form-ctx {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		justify-content: center;
	}

	.form-ctx > label {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		padding: 2em 0;
		position: relative;
	}

	.form-ctx > label > input {
		width: 100%;
		padding: 1em;
		border: 2px var(--light-gray) solid;
		border-radius: 5px;
	}

	.form-ctx > label > span {
		padding: 3px 5px;
		background: var(--white);
		position: absolute;
		top: 1.4em;
		left: 1.2em;
	}

	.form-ctx > label > i {
    position: absolute;
		top: 42px;
		left: 16px;
	}

  .space-left {
    padding-left: 4em !important
  }


	.tab-ctx {
		display: flex;
		width: 50%;
		justify-content: center;
		padding: 0.5em 0;
	}
	.tab-ctx:first-of-type {
		border-bottom: 2px var(--purple) solid;
		color: var(--purple);
	}
	.tab-ctx > i {
		display: flex;
		color: black;
		font-weight: bold;
	}
	.tab-ctx:first-of-type > i {
		color: var(--purple);
	}

	.tab-ctx > p {
		display: flex;
		font-size: 16px;
		padding: 3px;
		font-weight: bold;
	}

	.button-ctx {
		display: flex;
		width: 50%;
		justify-content: center;
		align-items: center;
		height: 40px;
		border-radius: 12px;
		background: var(--purple);
		color: var(--white);
	}
	.button-ctx > i {
		font-weight: bold;
	}
	.wrap-ctx > p {
		display: flex;
		font-size: 16px;
		position: absolute;
		bottom: 3em;
		color: #2a2a2a;
	}
	.wrap-ctx > p > a {
    padding: 0 0 0 0.5em;
		color: var(--purple);
		font-weight: bold;
	}
`;
