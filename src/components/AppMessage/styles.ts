import { css } from 'iares';

export const styles = () => css`
app-message {
  display: flex;
  width: 100%;
}

app-message:last-of-type > .wrap-ctx {
  border-bottom:0;
}

  .wrap-ctx {
    display: grid;
    grid-template-columns: 75px 1fr 75px;
    grid-gap: 1em;
    margin:1em;
    padding-bottom: 1em;
    border-bottom: 2px solid var(--dark-pink-pink)
  }

  .wrap-ctx > div {
    display: flex;
    flex-wrap: wrap;
    width:100%;
  }

  .wrap-ctx h3 {
    font-size: 16px;
    font-weight: bold;
    color:var(--light-gray);
    height: 26px;
  }
  .wrap-ctx p {
    font-size: 11px;
    color:var(--dark-grey);
    height: 50px
  }
  .wrap-ctx span {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%
  }
  .wrap-ctx span:first-of-type {
    height: 26px;
  }

  .wrap-ctx span:last-of-type {
    align-items: flex-start;
    height: 50px;
    
  }
  .wrap-ctx i {
    display:flex;
    padding: 10px;
    background: var(--purple);
    color: var(--white);
    border-radius:5px
  }
`;
