const replacements = {
    "'B": "Ɓ",
    "'b": "ɓ",
    "'D": "Ɗ",
    "d'": "ɗ",
    "'K": "Ƙ",
    "'k": "ƙ"
};

function replaceShortHand(inputElement) {
    const caretPosition = inputElement.selectionStart;

    Object.entries(replacements).forEach(([key, value]) => {
        const keyIndex = inputElement.value.lastIndexOf(key, caretPosition);

        if (keyIndex !== -1) {
            const before = inputElement.value.slice(0, keyIndex);
            const after = inputElement.value.slice(keyIndex + key.length);

            inputElement.value = before + value + after;
            inputElement.selectionStart = inputElement.selectionEnd = keyIndex + value.length;
        }
    });
}

document.addEventListener("input", (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === "input" || target.tagName.toLowerCase() === "textarea") {
        replaceShortHand(target);
    }
});
