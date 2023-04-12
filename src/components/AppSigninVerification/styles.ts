import { css } from 'iares';

export const styles = () => css`
  app-signin-verification,
	.wrap-ctx {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		justify-content: center;
	}

  .wrap-ctx {
    padding:0 1em
  }

	.wrap-ctx > h1 {
    display: flex;
    width:100%;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    padding: 2em 0;
    color: black
	}

  .form-ctx {
    display: flex;
    width:100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .form-ctx > label {
    display: flex;
    flex-wrap:wrap;
    width:100%;
    padding: 2em 0;
    position: relative;
  }
  .form-ctx > label > input {
    width:100%;
    padding: 1em 1em 1em 4em;
    border: 2px var(--light-gray) solid;
    border-radius: 5px;
  }
  .form-ctx > label > span {
    padding:3px 5px;
    background: var(--white);
    position: absolute;
    top:1.4em;
    left: 1.2em;

  }
  .form-ctx > label > i {
    position:absolute;
    top:42px;
    left:16px;

  }

  .tab-ctx {
    display: flex;
    width:50%;
    justify-content: center;
    padding:0.5em 0;
  }
  .tab-ctx:nth-of-type(2) {
    border-bottom: 2px  var(--purple) solid;
    color:var(--purple);
  }
  .tab-ctx > i {
    display: flex;
    color:black;
    font-weight: bold;
  }
  .tab-ctx:nth-of-type(2) > i {
    color:var(--purple);
  }
  
  .tab-ctx > p {
    display: flex;
    font-size: 16px;
    padding:3px;
    font-weight:bold
  }

  .button-ctx {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 12px;
    background:var(--purple);
    color: var(--white)
  }
  .button-ctx > i {
    font-weight: bold
  }
  .wrap-ctx > p {
    display: flex;
    font-size: 16px;
    position: absolute;
    bottom:3em;
    color:var(--black);
  }
  .wrap-ctx >  p > a {
    color:var(--purple);
    font-weight: bold;
  }
`;
