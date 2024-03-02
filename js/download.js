// THE SECTION OF DOWNLOAD
// THIS CODE MAKES DOWNLOAD A FOLDER


  // THE FIRST SECTION OF DOWNLOAD
document.getElementById('download-pdf').addEventListener('click', function() {
    // Change the file path to match the location of your PDF file
    var filePath = '../images/downloads/secret.pdf';
    // Create an anchor element
    var a = document.createElement('a');
    a.href = filePath;
    a.download = 'faux_document.pdf'; // Name of the downloaded file
    document.body.appendChild(a);
    
    // Trigger a click event on the anchor element to start the download
    a.click();
    
    // Remove the anchor element from the DOM
    document.body.removeChild(a);
});

document.getElementById('show-document').addEventListener('click', function() {
    var documentDiv = document.getElementById('document');
    var hideButton = document.getElementById('hide-document');
    this.classList.add('hidden');
    hideButton.classList.remove('hidden');
    documentDiv.classList.remove('hidden'); // Show the document
    documentDiv.classList.add('visible');
});

document.getElementById('hide-document').addEventListener('click', function() {
    var documentDiv = document.getElementById('document');
    var showButton = document.getElementById('show-document');
    this.classList.add('hidden');
    showButton.classList.remove('hidden');
    documentDiv.classList.remove('visible'); // Hide the document
    documentDiv.classList.add('hidden');
});

// ******************************************************
// THE SECOND SECTION OF DOWNLOAD

document.getElementById('download-pdf1').addEventListener('click', function() {
    // Change the file path to match the location of your PDF file
    var filePath = '../images/downloads/doc.pdf';
    // Create an anchor element
    var a = document.createElement('a');
    a.href = filePath;
    a.download = 'fin_prise_charge_1.pdf'; // Name of the downloaded file
    document.body.appendChild(a);
    
    // Trigger a click event on the anchor element to start the download
    a.click();
    
    // Remove the anchor element from the DOM
    document.body.removeChild(a);
});

document.getElementById('show-document1').addEventListener('click', function() {
    var documentDiv = document.getElementById('document1');
    var hideButton = document.getElementById('hide-document1');
    this.classList.add('hidden');
    hideButton.classList.remove('hidden');
    documentDiv.classList.remove('hidden'); // Show the document
    documentDiv.classList.add('visible');
});

document.getElementById('hide-document1').addEventListener('click', function() {
    var documentDiv = document.getElementById('document1');
    var showButton = document.getElementById('show-document1');
    this.classList.add('hidden');
    showButton.classList.remove('hidden');
    documentDiv.classList.remove('visible'); // Hide the document
    documentDiv.classList.add('hidden');
});
//****************************************************************** */
// THE THIRD SECTION OF DOWNLOAD
document.getElementById('download-pdf2').addEventListener('click', function() {
    // Change the file path to match the location of your PDF file
    var filePath = '../images/downloads/doc.pdf';
    // Create an anchor element
    var a = document.createElement('a');
    a.href = filePath;
    a.download = 'fin_prise_charge_2.pdf'; // Name of the downloaded file
    document.body.appendChild(a);
    
    // Trigger a click event on the anchor element to start the download
    a.click();
    
    // Remove the anchor element from the DOM
    document.body.removeChild(a);
});


document.getElementById('show-document2').addEventListener('click', function() {
    var documentDiv = document.getElementById('document2');
    var hideButton = document.getElementById('hide-document2');
    this.classList.add('hidden');
    hideButton.classList.remove('hidden');
    documentDiv.classList.remove('hidden'); // Show the document
    documentDiv.classList.add('visible');
});

document.getElementById('hide-document2').addEventListener('click', function() {
    var documentDiv = document.getElementById('document2');
    var showButton = document.getElementById('show-document2');
    this.classList.add('hidden');
    showButton.classList.remove('hidden');
    documentDiv.classList.remove('visible'); // Hide the document
    documentDiv.classList.add('hidden');
});
