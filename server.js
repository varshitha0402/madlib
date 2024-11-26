document.getElementById('generateMadLib').addEventListener('click', () => {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const verb = document.getElementById('verb').value;
    const pluralNoun = document.getElementById('pluralNoun').value;
    const adverb = document.getElementById('adverb').value;

    if (!noun || !adjective || !verb || !pluralNoun || !adverb) {
        alert('Please fill out all fields!');
        return;
    }

    const madLib = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}. They often played with ${pluralNoun}, and everyone was amazed!`;

    const output = document.getElementById('output');
    output.style.display = 'block';
    output.textContent = madLib;
});