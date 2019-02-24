export function getJSDay(dayNum) {
    if (+dayNum >= 6) {
        return 0;
    }
    return +dayNum + 1;
}


export function dayName(dateString) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    return days[d.getDay()];
}

export function checkShopAvailability(schedule = []) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    let isOpen = false;
    let i;

    for (i = 0; i < schedule.length; i++) {
        const scheduleNow = schedule[i];
        if (getJSDay(scheduleNow.day) == currentDay) {
            const shopOpenTime = new Date(new Date().setHours(scheduleNow.open.split(":")[0], 0, 0));
            const shopCloseTime = new Date(new Date().setHours(scheduleNow.close.split(":")[0], 0, 0));
            if ((shopOpenTime < currentDate) && (shopCloseTime > currentDate)) {
                isOpen = true;
            }
        }
    }

    if (isOpen) {
        return { availablityMsg: 'Store is open', isOpen: true };
    }

    const nextAvailablity = getNextItem(schedule, i);
    const nextAvailablityDate = new Date(new Date().setDate(currentDate.getDate() + getJSDay(nextAvailablity.day)));
    const localeString = new Date(nextAvailablityDate.setHours(nextAvailablity.open.split(":")[0], 0, 0)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    return { availablityMsg: `Next opening time: ${dayName(nextAvailablityDate)} at ${localeString}`, isOpen: false };
}

export function parseStoreResponse(storeResponse) {
    let openedStores = [];
    let closedStores = [];
    let allUnavailable = true;
    for (let i = 0; i < storeResponse.length; i++) {
        const storeObj = storeResponse[i];
        const availablityData = checkShopAvailability(storeObj.schedule)
        if (availablityData.isOpen) {
            allUnavailable = false;
            openedStores.push(Object.assign({}, storeObj, availablityData));
        } else {
            closedStores.push(Object.assign({}, storeObj, availablityData));
        }
    }

    return { data: openedStores.concat(closedStores), allUnavailable };
}

export function getNextItem(arr, index) {
    if (index >= 0 && index < arr.length - 1) {
        return arr[index + 1]
    }

    return arr[0]
}

export function sortSchedule(schedule) {
    return schedule.sort(function (a, b) {
        return a.day - b.day
    });
} 
