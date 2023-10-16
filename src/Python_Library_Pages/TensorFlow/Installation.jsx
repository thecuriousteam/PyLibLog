import React from 'react'

const Installation = () => {
    return (
        <div>
            <h1 className='text-3xl'>Install TensorFlow With pip </h1><br />
            <h1><b><u>Before Installation of TensorFlow You need to set up Your Python .</u>  </b></h1>
            <p>
                <br />
                <h2><b>For Windows:</b></h2>
                <h4><u>Download Python:</u></h4>
                <ol>
                    <li>Visit the official Python website at <a href="https://www.python.org/"><b><u>python.org</u></b></a></li>
                    <li>Navigate to the "Downloads" section.</li>
                    <li>Click on the latest version of Python for Windows.</li>
                </ol>

                <h4><u>Run the Installer:</u></h4>
                <ol>
                    <li>Run the downloaded installer.</li>
                    <li>Check the box that says "Add Python to PATH" during installation.</li>
                </ol>

                <h4><u>Install Python:</u></h4>
                <ol>
                    <li>Click <b>"Install Now"</b> to start the installation process.</li>
                    <li>The installer will download and install Python on your system.</li>
                </ol>

                <h4><u>Verify Installation:</u></h4>
                <ol>
                    <li>Open a Command Prompt or PowerShell.</li>
                    <li>Type <code><b>python --version</b></code> or <code><b>python -V</b></code> and press Enter to verify the installation.</li>
                </ol>
            </p><br />
            <h1 className='mb-2'><strong>Installation of TensorFlow :</strong> </h1>
            <h3>
                TensorFlow is a popular machine learning library developed by Google.
            </h3>
            <h3>
                We'll go through the steps for installing it on different operating systems. I'll assume you have a system that meets the requirements you provided.
            </h3>
            <br />
            <h3>
                <strong>1. Installing on Ubuntu: </strong></h3><br />
            <h4>
                <b> <u> <i>Note:</i></u> </b> Make sure your system is up to date:
            </h4>
            <h2 className='mt-2'>For installation of tensorFlow Open cmd (cammand prompt) and type following cammand...</h2>
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
                <h2>pip install tensorflow</h2>
            </div>
            <br />
            <h3>
                <strong>2.  Installing on Windows: </strong></h3><br />
            <h4>
                <b> <u> <i>Note:</i></u> </b> Make sure your system is up to date:
            </h4>
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
                <h2>pip install tensorflow</h2>
            </div>
            <br />
            <h3><strong>3. Installing on macOS:</strong></h3>
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4'>
                <h2>pip install tensorflow</h2>
            </div>
            <h1 className='mt-5 font-bold text-purple-700'> NOTE: Cammand is same for every OS Only what you need to check is your python version . </h1>

        </div>
    )
}

export default Installation