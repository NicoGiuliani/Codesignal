function recurringTask(firstDate, k, daysOfTheWeek, n) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const split = firstDate.split('/');
    let scheduledTasks = [];
        
    // reconfigures date to MM/DD/YYYY format and turns it into a Date object
    let currentDate = (new Date([split[1], split[0], split[2]].join('/')));
    
    // iterates through the first week and pulls out days marked on days
    for (let i = 0; i < 7; i++) {
        if (daysOfTheWeek.includes(weekdays[currentDate.getDay()])) {
            scheduledTasks.push(new Date(currentDate));
            if (scheduledTasks.length == daysOfTheWeek.length) break;
        }         
        currentDate.setDate(currentDate.getDate() + 1);
    } 
    
    // adds days that are k weeks ahead of the first week's scheduled tasks
    for (let i = 0, temp; scheduledTasks.length < n; i++) {
        temp = new Date(scheduledTasks[i]);
        temp.setDate(scheduledTasks[i].getDate() + (7 * k));
        scheduledTasks.push(new Date(temp));
    }
        
    // iterate over the scheduledTasks and convert them back to DD/MM/YYYY format
    for (let i = 0, day, month; i < scheduledTasks.length; i++) {
        day = scheduledTasks[i].getDate().toString();
        month = (scheduledTasks[i].getMonth() + 1).toString();
        if (day.length < 2) day = 0 + day;
        if (month.length < 2) month = 0 + month;
        scheduledTasks[i] = [day, month, scheduledTasks[i].getFullYear()].join('/');
    }
    
    return scheduledTasks;  
}





/* OLDER VERSIONS */

// function recurringTask(firstDate, k, daysOfTheWeek, n) {
//     const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let split = firstDate.split('/');
//     let day = split[0];    
//     let month = split[1];
//     let year = split[2];
//     let scheduledTasks = [];
    
//     // determines if year is a leap year and inserts February's length into monthLengths
//     const f = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28;
//     const monthLengths = [31, f, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
//     // formats the date and pushes it into the scheduledTasks array
//     let justIncremented = false;
//     saveDate = () => {   
//         if (day > monthLengths[month - 1]) {
//             day %= monthLengths[month - 1];
//             if (++month > 12) {
//                 month %= 12;
//                 if (!justIncremented) {
//                     year++;
//                     justIncremented = true;
//                 } else justIncremented = false;                
//             }  
//         }
//         if (day.toString().length < 2) day = "0" + day;
//         if (month.toString().length < 2) month = "0" + month;
//         scheduledTasks.push([day, month, year].join('/'));
//     }
    
//     // gets an index representing the day of the week of the first given date
//     let dayOfWeek = (new Date([month, day, year])).getDay();

//     // iterates through the first week and pulls out days marked for tasks
//     for (let i = 0; i < 7; i++, day++) {
//         if (daysOfTheWeek.includes(weekdays[dayOfWeek])) {
//             saveDate();
//             if (scheduledTasks.length == daysOfTheWeek.length) break;
//         }   
//         dayOfWeek = (dayOfWeek + 1) % 7;
//     }
    
//     // adds days that are k weeks ahead of the first week's scheduled tasks
//     for (let i = 0; scheduledTasks.length < n; i++) {
//         split = scheduledTasks[i].split('/');
//         day = parseInt(split[0]) + (7 * k);
//         month = split[1];
//         saveDate();
//     }
    
//     return scheduledTasks;
// }



// function recurringTask(firstDate, k, daysOfTheWeek, n) {
//     const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const split = firstDate.split('/');
//     let taskDates = [];
        
//     // reconfigures date to MM/DD/YYYY formatand turns it into a Date object
//     let currentDate = (new Date([split[1], split[0], split[2]].join('/')));
    
//     // iterates through the first week and pulls out days marked on days
//     // this will continue until the days marked within the first week are gathered 
//     for (let i = 0; i < 7; i++) {
//         if (daysOfTheWeek.includes(weekdays[currentDate.getDay()])) {
//             taskDates.push(new Date(currentDate));
//             if (taskDates.length == daysOfTheWeek.length) break;
//         }         
//         currentDate.setDate(currentDate.getDate() + 1);
//     }
    
//     const cap = taskDates.length;
//     // loops until the desired number of tasks (n) are in the answer array
//     while (taskDates.length < n) {
//         // iterates over the dates in the first week, then adds dates k weeks ahead
//         for (let i = 0, copy; i < cap; i++) {
//             copy = new Date(taskDates[i]);
//             copy.setDate(taskDates[i].getDate() + (7 * k));
//             taskDates.push(new Date(copy));
//         }     
//     }
    
//     // iterate over the taskDates and convert them back to DD/MM/YYYY format
//     for (let i = 0; i < taskDates.length; i++) {
//         let a = taskDates[i].getDate().toString();
//         let b = (taskDates[i].getMonth() + 1).toString();
//         if (a.toString().length < 2) { a = 0 + a; }
//         if (b.length < 2) { b = 0 + b; }
//         taskDates[i] = [a, b, taskDates[i].getFullYear()].join('/');
//     }
    
//     return taskDates;  
// }