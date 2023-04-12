import { css } from 'iares';

export const styles = () => css`
  app-add-contact{
		display: flex;
    align-items:flex-start;
    justify-content: flex-start;
		width: 100%;
    height: 100vh;
	}
  
	.wrap-ctx {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
		font-size: 20px;
		font-weight: bold;
		color: var(--white);
		
	}
   .contact-ctx {
    display: flex;
    width: 100%;
    height: 75px;
    background: var(--purple);
    border-radius: 10px 10px 1px 1px;
  }

	.contact-ctx > h1 {
    display: flex;
		width: 100%;
    font-weight:500;
    padding-top:1.2em;
    margin-bottom: 1em;
    font-size:22px;
	}
  
  .contact-ctx > span {
    display: flex;
    padding:1em;
    color:var(--white)

  }
 
`;
