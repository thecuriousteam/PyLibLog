import React from 'react'

const Installation = () => {
    return (
        <div className='leading-relaxed'>
            <h1 className='text-3xl font-bold text-gray-700'>Installation of Django...</h1>
            <h2 className='mb-4 mt-3'> I'll provide you with clear and concise steps to install Django for the first time.</h2>
            <h3> <b>Step 1: </b>Install Python (if not already installed)</h3>
            <p>
                If Python is not already installed on your system, you need to install it. Django requires Python to work. You can download the latest version of Python from the official website: Python Downloads. Follow the installation instructions for your operating system.
            </p>
            <br />
            <h3> <b>Step 2: </b> Verify Python Installation</h3>
            <p>Open a command prompt or terminal and verify that Python is installed correctly by running:</p>
            <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
                <h2>python --version</h2>
            </div>
            <h2>This command should display the version of Python installed on your system.</h2>
            <h3 className='mt-4'> <b>Step 3: </b>Install Django</h3>
            <p>Once you have Python installed, you can use Python's package manager, pip, to install Django. Open a command prompt or terminal and run the following command:</p>
            <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
                <h2>pip install django</h2>
            </div>
            <h2>This command will download and install the latest version of Django.</h2>
            <br />
            <h3> <b>Step 4: </b> Verify Django Installation</h3>
            <h2>To ensure that Django has been installed successfully, run the following command:</h2>
            <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
                <h2>django-admin --version</h2>
            </div>
            <h2>This command should display the installed Django version, indicating that Django is correctly installed on your system.</h2>
            <h3> <b>Step 5: </b> Create a Django Project (Optional)</h3>
            <p>You can create a new Django project using the following command:</p>
            <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
                <h2>django-admin startproject projectname</h2>
            </div>
            <h2>Replace projectname with your preferred project name. This command will create a directory with your project name and the initial project structure.</h2>
            <br />
            <h3> <b>Step 6: </b> Start the Development Server (Optional)</h3>
            <h3>Change into your project directory:</h3>
            <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
                <h2>cd projectname</h2>
            </div>
            <h3 className='mt-3'>Now, you can start the development server:</h3>
            <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
                <h2>python manage.py runserver</h2>
            </div>
            <h2 className='mt-3'>Your Django project is now running, and you can access it by opening a web browser and navigating to `http://localhost:8000/`.</h2>
            <h1 className='text-center mt-7 text-2xl'>Thank you :) </h1>
            <p className='text-center'>Follow pyLibLog to get more upadate about python </p>
        </div>
    )
}

export default Installation