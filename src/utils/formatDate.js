export function formatDate(dateString) {
    // "04.04.25 1:13" -> DD.MM.YY HH:mm
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split(".");
    const [hour, minute] = timePart.split(":");

    // Год 2025 -> 20 + 25
    const fullYear = "20" + year;

    const postDate = new Date(fullYear, month - 1, day, hour, minute);
    const now = new Date();

    const diffMs = now - postDate;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) return "только что";
    if (diffMinutes < 60) return `${diffMinutes} мин назад`;
    if (diffHours < 24) return `${diffHours} час${diffHours === 1 ? '' : 'а'} назад`;
    if (diffDays < 7) return `${diffDays} д${diffDays === 1 ? 'ень' : 'ней'} назад`;

    // Если больше недели — показать просто дату
    return `${day}.${month}.${fullYear}`;
}

export function getFormattedDate() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы от 0 до 11
    const year = String(now.getFullYear()).slice(-2); // последние 2 цифры года
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
