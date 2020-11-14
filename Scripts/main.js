exports.activate = function() {}
exports.deactivate = function() {}

nova.commands.register("sort-lines.sortLines", (editor) => {
    const ranges = editor.selectedRanges;
    for (const r of ranges) {
        const text = editor.getTextInRange(r);
        const lines = text.split('\n');
        const sortedLines = lines.sort((a, b) => {
            a = a.toLowerCase();
            b = b.toLowerCase();
            return a === b ? 0 : a > b ? 1 : -1;
        });
        editor.edit((e) => {
            e.replace(range, sortedLines.join('\n'));
        })
    }
});

nova.commands.register("sort-lines.sortLinesCaseSensitive", (editor) => {
    const ranges = editor.selectedRanges;
    for (const r of ranges) {
        const text = editor.getTextInRange(r);
        const lines = text.split('\n');
        const sortedLines = lines.sort();
        editor.edit((e) => {
            e.replace(range, sortedLines.join('\n'));
        })
    }
});