export function formatDate(time) {
    let initialDate = new Date(time),
        year = initialDate.getFullYear(),
        month = initialDate.getMonth() + 1,
        date = initialDate.getDate(),
        day = initialDate.getDay();
    
    let weeks = ['一', '二', '三', '四', '五', '六', '日'];

    day = weeks[day - 1];

    let formatedDate = `${year}年${month}月${date}日 星期${day}`;
    return formatedDate;
}