const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries = batteryBatches.reduce((sum, battery) => sum + battery, 0);

console.log(totalBatteries); // Expected output: 31
