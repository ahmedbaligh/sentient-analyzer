const updateUI = data => {
  const resultsContainer = document.querySelector('#results');
  resultsContainer.innerHTML = '';

  const results =
    data.status.code === '0'
      ? `
    <table>
      <tbody>
        ${Object.entries(data)
          .filter(([, value]) => typeof value !== 'object')
          .map(
            ([key, value]) =>
              `<tr>
                <th>${key}</td>
                <td>${value}</td>
              </tr>`
          )
          .join('')}
      </tbody>
    </table>
  `
      : `<p class="no-data">${data.status.msg}</p>`;

  resultsContainer.innerHTML = results;
};

export default updateUI;
