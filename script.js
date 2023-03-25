document.getElementById('submit').addEventListener('click', async () => {
    const queryInput = document.getElementById('query');
    const query = queryInput.value;
    const responseElement = document.getElementById('response');
  
    try {
      const result = await fetchChatGPT(query);
      responseElement.textContent = result.choices[0].text;
    } catch (error) {
      responseElement.textContent = 'Error: ' + error.message;
    }
  });
  
  async function fetchChatGPT(prompt) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.5,
      })
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch response from ChatGPT API');
    }
  
    return await response.json();
  }
  