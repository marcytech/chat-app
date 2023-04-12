import { css } from 'iares';

export const styles = () => css`
  app-chat-message {
    display: flex;
    width: 100%;
  }

  .wrap-ctx {
    display: grid;
    grid-template-columns: 75px 1fr;
    grid-gap: 1em;
    grid-template-areas:"avatar message";
    width: 100%;
    margin: 1em;
    padding-bottom: 1em;
  }

  .message-ctx {
    grid-area: message;
  }

  .message-ctx {
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    position: relative;
  }
  
  .message-ctx p {
    font-size: 1em;
    background: #AD87E4;
    border-radius:30px;
    border-bottom-left-radius:0;
    padding:1em;
    margin: 0 0 0.5em 0;
  }

  .message-ctx > span {
    display:flex;
    width:60px;
    font-size: 0.875em;
    text-transform: uppercase;
  }

  .avatar-ctx {
    grid-area: avatar;
  }

  .wrap-ctx.reverse-ctx {
    grid-template-areas:"message avatar";
    grid-template-columns: 1fr 75px;
  }
  
  .reverse-ctx .message-ctx {
    justify-content: flex-end;

  }
  .reverse-ctx .message-ctx > p {
    border-bottom-left-radius:30px;
    border-bottom-right-radius:0;
    background:var(--purple-soft);
  }

  .reverse-ctx .message-ctx > span {
    justify-content: flex-end;
  }
  
`;
