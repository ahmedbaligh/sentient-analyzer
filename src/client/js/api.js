const getAnalysisResults = async (endpoint = '', data = {}) => {
  let result;

  try {
    result = await fetch(`http://localhost:8081${endpoint}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    result = await result.json();
  } catch (error) {
    result = `The following error happened, while making your request: ${error}`;
  } finally {
    return result;
  }
};

export { getAnalysisResults };
