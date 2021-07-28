import { getAnalysisResults } from './api';
import updateUI from './updateUI';

const onAnalyze = async e => {
  e.preventDefault();

  const resultsContainer = document.querySelector('#results');
  let articleURL = document.querySelector('#article-url');
  let lang = document.querySelector('#lang').value;

  // Start the API request
  resultsContainer.classList.add('loading');
  const data = await getAnalysisResults('/analyze', {
    url: articleURL.value,
    lang
  });
  resultsContainer.classList.remove('loading');

  updateUI(data);
};

export { onAnalyze };
