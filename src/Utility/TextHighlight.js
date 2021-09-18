export default function getHighlightedText(text, highlight) {

    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    if (parts.length == 0) return
    return <span> {parts.map((part, i) =>
        <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ? 'bg-yellow-200 font-bold dark:bg-purple-900' : ''}>
            {part}
        </span>)
    } </span>;
}
