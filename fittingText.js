const fittingText = (text, width) => {
    let trimmedText = text.trim();
    let formattedText = ``;

    if (width < 15) {
        return 'Invalid input';
    } else if (trimmedText.length <= width) {
        return text;
    } else if (trimmedText.length > width) {
        const re = new RegExp(`(.{1,${width+1}})(?=\\s|$)`, 'g')
        const splitText = trimmedText.match(re).map(line => line.trim());
        formattedText += splitText.join('\n ')
    }
    return formattedText;
}


module.exports = fittingText;