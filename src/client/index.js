import { onAnalyze } from './js/formHandler';
import { onValidate } from './js/helpers';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';

const form = document.querySelector('#form');

document.querySelector('#article-url').onchange = ({ target }) =>
  onValidate(form, target.validity.valid);

form.onsubmit = e => onAnalyze(e);

export { onAnalyze, onValidate };
