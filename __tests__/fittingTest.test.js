const fittingText = require('../fittingText');

const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.'
describe('Fitting Text', () => {
    it('should return <invalid input> when passed a width less than 15', () => {
        expect(fittingText('A', 2)).toBe('Invalid input')
    });

    it('should return the input text without change if the length of input text is less than 15', () => {
        expect(fittingText('Northcoders', 15)).toBe('Northcoders')
    });

    it('should return the input text divided in two lines at the closest to the width space character ', () => {
        expect(fittingText('Northcoders Coding Bootcamp', 15)).toBe(`Northcoders\n Coding Bootcamp`)
        expect(fittingText('Northcoders Coding Bootcamp', 20)).toBe(`Northcoders Coding\n Bootcamp`)
    });

    it('should return the input text divide in new lines with maximum line length of the given width', () => {
        expect(fittingText(str, 50)).toBe(`Lorem ipsum dolor sit amet, consectetur adipiscing\n elit. Aliquam nec consectetur risus. Cras vel urna\n a tellus dapibus consequat. Duis bibendum\n tincidunt viverra. Phasellus dictum efficitur sem\n quis porttitor. Mauris luctus auctor diam id\n ultrices. Praesent laoreet in enim ut placerat.\n Praesent a facilisis turpis.`)

        expect(fittingText(str, 30)).toBe(`Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Aliquam nec consectetur risus.\n Cras vel urna a tellus dapibus\n consequat. Duis bibendum\n tincidunt viverra. Phasellus\n dictum efficitur sem quis\n porttitor. Mauris luctus\n auctor diam id ultrices.\n Praesent laoreet in enim ut\n placerat. Praesent a facilisis\n turpis.`)
    });
});

// `(.{1,${width}})(?<=\\s|$)`