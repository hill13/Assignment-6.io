const rootElement = document.getElementById('root');

let frequencyTable = {};

const createUI = () => {
	const textarea = document.createElement('textarea');
	const submitButton = document.createElement('button');
	submitButton.textContent = 'Submit';
	rootElement.appendChild(textarea);
	rootElement.appendChild(submitButton);

	submitButton.addEventListener('click', () => {
		const text = textarea.value;
		const words = text.split(/\s+/);
		words.forEach((word) => {
			if (word) {
				frequencyTable[word] = (frequencyTable[word] || 0) + 1;
			}
		});
		const topWords = Object.entries(frequencyTable)
			.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
			.slice(0, 100);
		const tableHTML = topWords
			.map(([word, frequency]) => `<tr><td>${word}</td><td>${frequency}</td></tr>`)
			.join('');
		const table = document.createElement('table');
		table.innerHTML = `
			<thead>
				<tr><th>Word</th><th>Frequency</th></tr>
			</thead>
			<tbody>${tableHTML}</tbody>
		`;
		rootElement.appendChild(table);
		console.log(frequencyTable);
	});
};

createUI();
