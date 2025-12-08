export default class NextRecycleBinDay {
    GetNextRecycleBinDay() {
        // Example recycle bin day (27th Dec 2023)
        let exampleBinDay = new Date(2023, 11, 27); // Note: Months are zero-based (0 is January, 1 is February, etc.)
        let today = new Date();

        // Calculate the difference in days between today and the exampleBinDay
        let daysDiff = Math.floor((today.getTime() - exampleBinDay.getTime()) / (1000 * 60 * 60 * 24));

        // Calculate the next recycle bin day
        let nextRecycleBinDay = new Date(today);
        nextRecycleBinDay.setDate(today.getDate() + (14 - (daysDiff % 14)));

        console.log(`Today: ${today.toDateString()}`);
        console.log(`Next Recycle Bin Day: ${nextRecycleBinDay.toDateString()}`);
        return nextRecycleBinDay.toDateString();
    }

    GetDaysToNextRecycleBinDay() {
        // Example recycle bin day (27th Dec 2023)
        let exampleBinDay = new Date(2023, 11, 27); // Note: Months are zero-based (0 is January, 1 is February, etc.)
        let today = new Date();

        // Calculate the difference in days between today and the exampleBinDay
        let daysDiff = Math.floor((today.getTime() - exampleBinDay.getTime()) / (1000 * 60 * 60 * 24));

        // Calculate the next recycle bin day
        let nextRecycleBinDay = new Date(today);
        nextRecycleBinDay.setDate(today.getDate() + (14 - (daysDiff % 14)));

        console.log(`Today: ${today.toDateString()}`);
        console.log(`Next Recycle Bin Day: ${nextRecycleBinDay.toDateString()}`);
        return Math.floor((nextRecycleBinDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    }
}
