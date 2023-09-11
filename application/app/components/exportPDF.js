// Function to fetch CSS content from a file
async function fetchCSS(url) {
    const response = await fetch(url);
    return response.text();
}

// Function to export HTML and CSS to PDF
async function exportToPDF() {
    const container = document.querySelector('.resume-container');
    const styles = await fetchCSS('application/app/styles/styles.css');

    // Create a new window with the content to be exported
    const exportWindow = window.open('', '_blank');
    exportWindow.document.open();
    exportWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Exported Content</title>
            <style>
            * {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            margin: 0;
            font-size: 14px;
        }
        
        .full-row {
            background-color: #181818;
            height: 0.5px;
            width: 100%;
        }
        .row {
            background-color: #181818;
            height: 0.5px;
            width: 90%;
        }
        .title-headings {
            display: flex;
            gap: 1%;
            align-items: baseline;
        }
        
        
        .experience-header {
            display: flex;
            justify-content: end;
        }
        .experience-header h5 {
            width: 60%;
        }
        
        .experience-header p {
            width: 40%;
            text-align: right;
        
        }
        
        
        .resume-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
        }
        
        .resume-card {
            border: 0.5px solid #181818;
            padding: 2%;
            border-radius: 15px;
        }
        
        form {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 20px;
        }
        main {
            margin-left: 5%;
            margin-right: 5%;
            border: 2px solid red;
        }
        @media print {
            * {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            margin: 0;
            font-size: 14px;
        }
        
        .full-row {
            background-color: #181818;
            height: 0.5px;
            width: 100%;
        }
        .row {
            background-color: #181818;
            height: 0.5px;
            width: 90%;
        }
        .title-headings {
            display: flex;
            gap: 1%;
            align-items: baseline;
        }
        
        
        .experience-header {
            display: flex;
            justify-content: end;
        }
        .experience-header h5 {
            width: 60%;
        }
        
        .experience-header p {
            width: 40%;
            text-align: right;
        
        }

            </style>
        </head>
        <body>
            ${container.innerHTML}
        </body>
        </html>
    `);
    exportWindow.document.close();

    // Wait for a short time to ensure that styles are applied
    setTimeout(() => {
        exportWindow.print();
        exportWindow.close();
    }, 10);
}

export default exportToPDF;