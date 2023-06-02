
const handleDownload = () => {
    let anchor = document.createElement('a');
    
    let url = './cv/test.pdf'; // Replace with your file URL or path
    
    // Set the download attribute with the desired file name
    anchor.download = 'test.pdf'; // Replace with your desired file name
    
    // Set the href attribute with the file URL
    anchor.href = url;
    
    // Simulate a click event on the anchor element
    anchor.click();
    console.log("downloading")
  }
  
  // Attach the button click event listener
  var downloadButton = document.getElementsByClassName('cv')[0];
  downloadButton.addEventListener('click', handleDownload);
  