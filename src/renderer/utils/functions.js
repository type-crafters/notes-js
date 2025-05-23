export function simpleDateFormat(date = new Date()) {
    const simpleDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];

    if (new Date() - date < 86_400 * 1_000) {
        return `${date.getHours() % 12 || 12}:${date.getMinutes().toString().padStart(2, "0")} ${date.getHours() < 12 ? "AM" : "PM"}`;
    }
    else if (new Date() - date < (86_400 * 7_000)) {
        return `${simpleDays[date.getDay()]} ${(date.getDate() + 1)}`;
    } else if (new Date() - date < (86_400 * 365_000)) {
        return `${months[date.getMonth()]} ${(date.getDate() + 1)}`;
    } else {
        return `${months[date.getMonth()]} ${date.getFullYear()}`
    }
}

export function ofWindowWidth(percentage) {
    return percentage * window.innerWidth / 100;
}

export function ofWindowHeight(percentage) {
    return percentage * window.innerHeight / 100;
}