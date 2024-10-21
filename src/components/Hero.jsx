import React from 'react'
import HeroImage from '../assets/image.png'
import  pdfFile from '../assets/Resume.pdf'

const Hero = () => {

  const handleDownload = () => {
    // Fetch the PDF file
    fetch(pdfFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Convert the response to a Blob (binary data)
        return response.blob();
      })
      .then(blob => {
        // Create a link element
        const link = document.createElement('a');
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);
        // Set the link href to the blob URL
        link.href = url;
        // Set the download attribute to the desired file name
        link.download = 'Resume.pdf';
        // Append the link to the body (it won't be visible)
        document.body.appendChild(link);
        // Programmatically click the link to trigger the download
        link.click();
        // Clean up and remove the link from the DOM
        document.body.removeChild(link);
        // Revoke the blob URL to release memory
        URL.revokeObjectURL(url);
      })
      .catch(err => console.error('Error downloading PDF:', err));
  };

  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Divyanshu Yadav</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button onClick={handleDownload}
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
  )
}

export default Hero