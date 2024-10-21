// Get click number
let clickNum = 0;

// Array to hold today's date and the click data
let clickDataArray = [["Date", "Click Count"]] //Start with Header


// Function to handle clicks
function onClick() {
    clickNum += 1;
    document.getElementById("clickNum").innerHTML = clickNum;
};

// Function to store data
function saveTodaysClicks() {

    // Get today's date
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    



    // Add today's click data to array
    clickDataArray.push([today, clickNum]);

    // Convert data array to CSV stirng
    let csvContent = clickDataArray.map(row => row.join(",")).join("\n");
    

    // Create Blob from CSV string
    const blob = new Blob([csvContent], { type: `type/csv` });
    
    //Create a temporary link to download the Blob as a .csv file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "Click_Data.csv";

    // Programmatically click the link to trigger the download
    link.click();
}






