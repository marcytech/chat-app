import { css } from 'iares';

export const styles = () => css`
  app-contact,
	.wrap-ctx {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
  .wrap-ctx {
    padding: 0 1.5em
	}
  
  .wrap-ctx > h1 {
    display: flex;
    width:100%;
    font-weight:500;
    font-size: 1.5em;
    padding: 2em 0;
    color: var(--light-gray);
    text-transform: uppercase;
    

  }
  .wrap-ctx > label {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    width:100%;
    padding:2em 0;
    position: relative;
  }

	.wrap-ctx > label > input {
		width:100%;
    padding: 1em 1em 1em 4em;
    border: 2px var(--light-gray) solid;
    border-radius: 5px;
	}

   .wrap-ctx > label > span {
    padding:3px 5px;
    background:var(--white);
    position: absolute;
    top:1.4em;
    left: 1.2em;
    color:var(--light-gray);
    font-weight: normal;
    font-size: 0.875em;
  }

	.wrap-ctx > label > i {
    position: absolute;
		top:49px;
    left:20px;
    color:var(--light-gray);
	}


  .wrap-ctx > label > button {
    display: flex;
    height:40px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 1em;
    margin-top: 3em;
		font-size: 16px;
    background: var(--white);
    color: var(--purple);
    border: 2px solid var(--purple);
  }


`;
