import React from "react";

const TkinterIntro = () => {
  return (
    <div className="ml-8 mb-8 mt-8">
      <div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Introduction to Tkinter</h1>
        <p>
          Tkinter ("Tk Interface")is python's standard cross-platform package
          for creating graphical user interfaces (GUIs). Tkinter's greatest
          strength is its ubiquity and simplicity. It works out of the box on
          most platforms (linux, OSX, Windows).
        </p>
        <br />
        <p>
          Tkinter is lightweight and relatively painless to use compared to
          other frameworks. This makes it a compelling choice for building GUI
          applications in Python, especially for applications where a modern
          sheen is unnecessary, and the top priority is to quickly build
          something that’s functional and cross-platform.
        </p>
        <br />
        <hr />
        <br />
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Create First GUI Application using Tkinter</h1>
        <p>
          Developing desktop based applications with python Tkinter is not a
          complex task. An empty Tkinter top-level window can be created by
          using the following steps.
        </p>
        <br />
        <ol>
          <li>
            import the Tkinter module.
            
            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
              <h2>import tkinter as tk </h2>
            </div><br />
          </li>
          <li>
            Create an instance of the Tk class which represents the main window.
            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
              <h2>window = tk.Tk()</h2>
            </div><br />
          </li>
          <li>
            Now that you have a window, you can add a widget. Use the tk.Label
            class to add some text to a window.
            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
              <h2>greeting = tk.Label(text="Hello, PyLibLog")</h2>
            </div>
            <p>
              We will learn about some more widgets like buttons, frames, etc.
              in the next section..
            </p><br />
          </li>
          <li>
            Use the mainloop method to run your application.
            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
              <h2>window.mainloop()</h2>
            </div><br />
          </li>
        </ol>
        <br />
        <hr />
        <br />
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Tkinter Widgets</h1>
        <p>Widget is an element of Graphical User Interface (GUI) that displays/illustrates information or gives a way for the user to interact with the OS.  In Tkinter , Widgets are objects ; instances of classes that represent buttons, frames, and so on.  Each separate widget is a Python object. When creating a widget, you must pass its parent as a parameter to the widget creation function. The only exception is the “root” window, which is the top-level window that will contain everything else and it does not have a parent. </p><br/> 
        <div>
          <table>
            <tr>
              <th>Widget</th>
              <th>Description</th>
            </tr>
            <hr />
            <tr>
              <td>Label</td>
              <td>A Widget used to display text on the screen.</td>
            </tr>
            <hr />
            <tr>
              <td>Button</td>
              <td>
                {" "}
                A button that can contain text and can perform an action when
                clicked.
              </td>
            </tr>
            <hr />
            <tr>
              <td>Entry</td>
              <td>
                A text entry widget that allows only a single line of text
              </td>
            </tr>
            <hr />
            <tr>
              <td>Frame</td>
              <td>
                A rectangular region used to group related widgets or provide
                padding between widgets
              </td>
            </tr>
            <hr />
            <tr>
              <td>Checkbutton</td>
              <td>
                The Checkbutton is used to display the CheckButton on the
                window.
              </td>
            </tr>
            <hr />
            <tr>
              <td>Radiobutton</td>
              <td>
                The Radiobutton is different from a checkbutton. Here, the user
                is provided with various options and the user can select only
                one option among them.
              </td>
            </tr>
            <hr />
            <tr>
              <td>Scrollbar</td>
              <td>
                It provides the scrollbar to the user so that the user can
                scroll the window up and down.
              </td>
            </tr>
            <hr />
            <tr>
              <td>MessageBox</td>
              <td>
                This module is used to display the message-box in the desktop
                based applications.
              </td>
            </tr>
            <hr />
            <tr>
              <td>ListBox</td>
              <td>
                The ListBox widget is used to display a list of options to the
                user.
              </td>
            </tr>
          </table>
          <br />
          <hr />
          <br />
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-4 text-gray-700'>Tkinter Geometry</h1>
        <p>
          The Tkinter geometry specifies the method by using which, the widgets
          are represented on display. The python Tkinter provides the following
          geometry methods.
        </p>
        <ul>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; The pack() method</li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; The grid() method</li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; The place() method</li>
        </ul><br/><br/>
        <h2 className='text-2xl font-bold mb-4 text-gray-700'>pack() method</h2>
        <p>
          The pack() widget is used to organize widget in the block. The
          positions widgets added to the python application using the pack()
          method can be controlled by using the various options specified in the
          method call.
        </p>
        <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
          <h2>widget.pack(options) </h2>
        </div>
        <br />
        <p>
          A list of possible options that can be passed in pack() is given
          below.
        </p>
        <ul>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>expand</b> If the expand is set to true, the widget expands to fill any
            space.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>Fill</b> By default, the fill is set to NONE. However, we can set it to
            X or Y to determine whether the widget contains any extra space.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>size</b> it represents the side of the parent to which the widget is to
            be placed on the window.
          </li>
        </ul>
        <br />
        <br />
        <h2 className='text-2xl font-bold mb-4 text-gray-700'>grid() widget</h2>
        <p>
          The grid() geometry manager organizes the widgets in the tabular form.
          We can specify the rows and columns as the options in the method call.
          We can also specify the column span (width) or rowspan(height) of a
          widget.
        </p>
        <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
          <h2>widget.grid(options) </h2>
        </div>
        <br />
        <p>
          A list of possible options that can be passed inside the grid() method
          is given below.
        </p>
        <ul>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>Column </b>
            The column number in which the widget is to be placed. The leftmost
            column is represented by 0.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>Columnspan </b>
            The width of the widget. It represents the number of columns up to
            which, the column is expanded.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>ipadx, ipady </b>
            It represents the number of pixels to pad the widget inside the
            widget's border.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>padx, pady </b>
            It represents the number of pixels to pad the widget outside the
            widget's border.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>row </b>
            The row number in which the widget is to be placed. The topmost row
            is represented by 0.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>rowspan </b>
            The height of the widget, i.e. the number of the row up to which the
            widget is expanded.
          </li>
          <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
            <b>Sticky </b>
            If the cell is larger than a widget, then sticky is used to specify
            the position of the widget inside the cell. It may be the
            concatenation of the sticky letters representing the position of the
            widget. It may be N, E, W, S, NE, NW, NS, EW, ES.
          </li>
        </ul>
        <br />
        <br />
        <h2 className='text-2xl font-bold mb-4 text-gray-700'>place() method</h2>
        <p>The place() geometry manager organizes the widgets to the specific x and y coordinates.
</p>
<div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
          <h2>widget.place(options) </h2>
        </div><br/>
        <p>A list of possible options is given below.</p>
        <ul>
            <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
                <b>Anchor </b>It represents the exact position of the widget within the container. The default value (direction) is NW (the upper left corner)
            </li>
            <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
                <b>bordermode </b>The default value of the border type is INSIDE that refers to ignore the parent's inside the border. The other option is OUTSIDE.
            </li>
            <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
                <b>height, width </b>It refers to the height and width in pixels.
            </li>
            <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
                <b>relheight, relwidth </b>It is represented as the float between 0.0 and 1.0 indicating the fraction of the parent's height and width.
            </li>
            <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
                <b>relx, rely </b>It is represented as the float between 0.0 and 1.0 that is the offset in the horizontal and vertical direction.
            </li>
            <li><i className="fa fa-solid fa-circle text-gray-900 text-xs"></i> &nbsp; 
                <b>x, y </b>It refers to the horizontal and vertical offset in the pixels.
            </li>
        </ul>
      </div>
    </div>
  );
};

export default TkinterIntro;
