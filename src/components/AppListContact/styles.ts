import { css } from 'iares';

export const styles = () => css`
app-list-contact,
.wrap-ctx {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #EFE7FA;
  border-radius:30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow:0 -5px 15px rgba(0, 0, 0, 0.1)
}

.title-ctx > h1 {
  display: flex;
  width:100%;
  font-weight:400;
  font-size: 1em;
  margin-bottom: 1em;
  color:var(--purple);
}

.contact-ctx {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.contact-ctx  h3 {
  margin-bottom: 0.5em;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color:var(--light-gray);
 }

.contact-ctx p {
  font-size: 0.875em;
  font-weight:normal;
  justify-content: center;
  align-items: center;
  color:var(--dark-grey);
  
}

.button-ctx span {
  display: flex;
  flex-wrap: wrap;
  padding: 0.7em 1em 0.5em 1em;
  font-size: 0.875em;
  font-weight:normal;
  justify-content: center;
  align-items: center;
  background:var(--purple-light);
  border-radius: 5px;
}

.grid-ctx {
  display: grid;
  grid-template-columns: 75px 1fr 75px;
  grid-gap: 1em;
  margin:1em;
  padding-bottom: 1em;
  width: 100%;
  justify-content: center;
  align-items: center;
}

`;
