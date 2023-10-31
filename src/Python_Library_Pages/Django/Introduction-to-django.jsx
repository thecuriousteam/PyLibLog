import React from 'react'

const DjangoIntro = () => {
  return (
    <div className='leading-relaxed'>
      <h1 className='text-3xl mb-3 font-bold text-gray-700'>Introduction to Django </h1>
      <p>
        Django is a high-level, open-source web framework that makes it easier to build web applications quickly and efficiently.
      </p>
      <p className='mt-2'>
        It was created with the goal of simplifying web development by providing a robust, flexible, and highly customizable toolkit for developers.
      </p>
      <p className='mt-2'>
        Django is written in Python, which is known for its readability and ease of use, making it an excellent choice for both beginners and experienced developers.
      </p>
      <p className='mt-4'>
        Django follows the Model-View-Controller (MVC) architectural pattern, but in Django, it's often referred to as the Model-View-Template (MVT). Here's a breakdown of the key components:
      </p>
      <ul className='mt-4 leading-7'>
        <li> <b>1.Model:</b> Defines the data structure and how it's stored in the database.</li>
        <li> <b>2.View:</b>  Handles the presentation logic and user interface.</li>
        <li> <b>3.Template: </b> Defines the structure of the HTML to be rendered.</li>
      </ul>
      <h1 className='mt-4 text-bold'>Advantages of Using Django:</h1>
      <ul className='mt-4 leading-8 mb-5'>
        <li> <b><u>1.Rapid Development:</u></b>  Django includes a range of built-in features, which means you can develop web applications faster.</li>
        <li> <b><u>2. Security</u>:</b>  Django has built-in security features to protect against common web vulnerabilities, such as SQL injection and cross-site scripting.</li>
        <li> <b><u>3.Scalability:</u> </b>Django is suitable for building both small and large-scale web applications.</li>
        <li> <b><u>4.Community and Documentation:</u>  </b>Django has a large and active community, so you'll find plenty of documentation and resources to help you learn.</li>
      </ul>
      <h1 className='font-bold mb-2'>Creating a New Django project  </h1>
      <h2><strong> Step 1: </strong> Create project using following cammand . </h2>
      <br />
      <h3>Open your terminal and navigate to the directory where you want to create your project. Run the following command to create a new Django project:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2>cd projectname</h2>
      </div>
      <h3>Replace "todoapp" with your preferred project name.</h3>
      <br />
      <h2><strong> Step 2: </strong> Create a New App </h2>
      <h3> In Django, a project is made up of one or more apps. We'll create a "tasks" app for our To-Do list. Run the following command:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2>cd todoapp</h2>
        <h2> python manage.py startapp tasks</h2>
      </div><br />
      <h2><strong> Step 3: </strong> Define Models</h2>
      <h3>In your "tasks" app, define the data models. Edit the tasks/models.py file to include a simple model for your tasks:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2 className='mb-3'> <span className='text-blue-400'>from </span> django.db <span className='text-blue-400'>import </span> models </h2>

        <h2>class Task(models.Model):</h2>
        <h2>title = models.CharField(max_length=200)</h2>
        <h2>completed = models.BooleanField(default=False)</h2>

        <h2 className='mt-3'>def __str__(self):</h2>
        <h2>return self.title</h2>
      </div>
      <h3>This model represents a task with a title and a completion status.</h3><br />
      <h2><strong> Step 4:</strong> Create Migrations and Apply Them</h2>
      <h3>Run these commands to create database tables for your models:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2> python manage.py makemigrations </h2>
        <h2> python manage.py migrate </h2>
      </div><br />
      <h2><strong> Step 5:</strong> Create Views and Templates</h2>
      <h3>Create views in your "tasks" app by editing the tasks/views.py file:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2>  <span className='text-blue-400'>from </span> django.shortcuts  <span className='text-blue-400'>import </span> render </h2>
        <h2 className='mb-3'> <span className='text-blue-400'>from </span> .models  <span className='text-blue-400'>import </span> Task</h2>
        <h2>def task_list(request):</h2>
        <h2 className='ml-6'> tasks = Task.objects.all()</h2>
        <h2 className='ml-6'>{`return render(request, 'tasks/task_list.html', {'tasks': tasks})`}</h2>
      </div>
      <h3>Now, create a template for the task list in tasks/templates/tasks/task_list.html:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <pre>
          <code>
            {
              `
  <!DOCTYPE html></h1> 
  <html>
  <head>
    <title>Task List</title>
  </head>
  <body>
    <h1>Task List</h1>
      <ul>
        {% for task in tasks %}
        <li>{{ task.title }}</li>
        {% endfor %}
      /ul>
  </body>
  </html>
`
            }
          </code>
        </pre>
      </div>
      <br />
      <h2><strong> Step 6:</strong> URL Routing</h2>
      <h3>Define URL patterns in your "tasks" app's `urls.py`:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2><span className='text-blue-400 '>from </span> django.urls <span className='text-blue-400'>import </span> path</h2>
        <h2 className='mb-3'><span className='text-blue-400 '>from </span>  <span className='text-blue-400'>.import </span> views</h2>
        <h2>urlpatterns = [ </h2>
        <h2 className='ml-7'>path('', views.task_list, name='task_list'),</h2>
        <h2>]</h2>
      </div>
      <h3>Then, include these URLs in your main project's urls.py:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2><span className='text-blue-400 '>from </span> django.contrib<span className='text-blue-400'>import </span> admin</h2>
        <h2 className='mb-3'><span className='text-blue-400 '>from </span>django.urls  <span className='text-blue-400'>import </span> path, include</h2>
        <h2>urlpatterns = [</h2>
        <h2 className='ml-7'>path('admin/', admin.site.urls),</h2>
        <h2 className='ml-7'> path('', include('tasks.urls')),</h2>
        <h2>]</h2>
      </div>
      <h2 className='mt-4'><strong>Step 7: </strong> Running the Development Server</h2>
      <h3>Start the development server by running this command:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2>python manage.py runserver</h2>
      </div>
      <h2>You can access your To-Do list app at `http://127.0.0.1:8000/`.</h2>
      <br />
      <h2 className='mt-4'><strong>Step 8: </strong>  Creating an Admin User</h2>
      <h3>To access the admin interface, create a superuser account using:</h3>
      <div className='bg-gray-800 text-white w-3/5 p-3 mt-4'>
        <h2>python manage.py createsuperuser</h2>
      </div>
      <h3>You can now log in to the admin interface at `http://127.0.0.1:8000/admin/` to manage your tasks.</h3>
      <p className='mt-4'>This is a basic To-Do list app. As you become more comfortable with Django, you can add features like task creation, task completion, user authentication, and more. </p>
    </div>
  )
}

export default DjangoIntro