import React from "react";

const Seaborn = () => {
    return (
        <div className='ml-8 mb-8 mt-8'>
            <div>
                <h1 className='text-3xl font-bold mb-4 text-gray-700'>Introduction to Seaborn</h1>
                <p>
                    Seaborn is a python package that is crucial for information visualization. It is used to make sense of large amounts of data in a straightforward way.
                </p>
                <h3 className='mt-3 text-gray-4500 font-bold'>
                    What is data visualization?
                </h3>
                <p>
                Graphical display of information and data is known as data visualization. 
                They offer an easy approach to observe and analyze trends, outliers, patterns in information using visual elements such as charts, graphs, mapping. 
                If the dataset is large, it becomes a hassle to work with. hence to analyze and generate sound judgment, data visualization is used.
                </p>
                <h3 className="mt-3 text-gray-4500 font-bold">Key features of Seaborn</h3>
                <ul className="">
                    <li>
                        <i className="fa fa-solid fa-star text-gray-900 text-xs"></i> &nbsp; Provides an intuitive and high-level interface for creating complex visualizations with minimal code. This makes it accessible to both beginners and experienced data scientists. 
                    </li>
                    <li>
                        <i className="fa fa-solid fa-star text-gray-900 text-xs"></i> &nbsp; Specializes in visualizing statistical relationships in data. It offers functions for creating informative visualizations that reveal data distributions, relationships, and patterns.
                    </li>
                    <li>
                        <i className="fa fa-solid fa-star text-gray-900 text-xs"></i> &nbsp; Comes with a variety of attractive themes and color palettes, making it easy to create visually appealing plots and charts. You can quickly change the look and feel of your visualizations to suit your needs.
                    </li>
                    <li>
                        <i className="fa fa-solid fa-star text-gray-900 text-xs"></i> &nbsp; Seaborn is built on top of Matplotlib, which means you can seamlessly integrate Seaborn with Matplotlib when you need fine-grained control over plot customization.
                    </li>
                    <li>
                        <i className="fa fa-solid fa-star text-gray-900 text-xs"></i> &nbsp; Excels at visualizing categorical data, allowing you to create informative bar plots, box plots, violin plots, and more. It's particularly useful for comparing data across different categories.
                    </li>
                </ul><br />
            </div>


            {/* Installation Process */}

            <div>
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Installing Seaborn on Windows</h1>
                <p>1. Ensure that you have either <b>Python PIP</b> or <b>Conda</b> installed. You can verify your environment using the following commands.</p>
                <p className="mt-2 font-bold">For PIP users:</p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                    <h2>pip --version</h2>
                    <h2>or</h2>
                    <h2>pip -V</h2>
                </div>
                <p className="mt-2 font-bold">For Conda users:</p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                    <h2>conda --version</h2>
                    <h2>or</h2>
                    <h2>conda -V</h2>
                </div>

                <p className="mt-4">2. Open command prompt as administrator. Then run the following commands to begin installation.</p>
                <p className="mt-2 font-bold">For PIP users:</p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                    <h2>pip install seaborn</h2>
                </div>
                <p className="mt-2 font-bold">For Conda users:</p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                    <h2>conda install seaborn</h2>
                </div>

                <p className="mt-4">3. Finally confirm the installation using these commands into your Python IDE.</p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
                    <h2><span className="text-blue-400">import</span> seaborn <span className="text-blue-400">as</span> sns</h2>
                    <h2>sns.__version__</h2>
                </div><br />
            </div>
            
            {/* Getting Started with Seaborn */}
            <div clas>
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Getting Started with Seaborn</h1>
                <p>
                    In this section, we will implement seaborn on a dataset and plot 3 different types of graphs while also exploring customization options available.
                </p>
                <h2><b><u>1. Import essential libraries</u></b></h2>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
                    <h2><span className="text-blue-400">import</span> seaborn <span className="text-blue-400">as</span> sns</h2>
                    <h2><span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd</h2>
                    <h2><span className="text-blue-400">import</span> numpy <span className="text-blue-400">as</span> np</h2>
                </div>
                <h2 className="mt-4"><b><u>2. Load dataset</u></b></h2>
                <p className="mt-4">Now that all the necessary dependencies are imported, we can get started with plotting data. 
                    Seaborn comes with 17 datasets which is useful for beginners to work on. 
                    To see the full list of datasets available, use the command:
                </p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
                    <h2>sns.get_dataset_names()</h2>
                </div>
                <p className="mt-4">
                    The "tips" dataset is a simple and small dataset that contains information about restaurant tips. It includes the following columns:
                    <ul className="mt-4"> 
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'total_bill': This column represents the total bill amount, which includes both the cost of the meal and any additional charges.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'tip': This column represents the tip amount given by the customer.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'sex': This column represents the gender of the person paying the bill (e.g., Male or Female).</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'smoker': This column indicates whether the party was a smoker or non-smoker (e.g., Yes or No).</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'day': This column specifies the day of the week. </li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'time': This column indicates whether it was lunch or dinner.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'size': This column represents the size of the party (i.e., the number of people in the group).</li>
                    </ul>
                </p>
                <p className="mt-4">We will use the following commands to display the first 5 rows of the dataset.</p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
                    <h2>tips_df = sns.load_dataset("titanic")</h2>
                    <h2>tips_df.head()</h2>
                </div>
                <h2 className="mt-4"><b><u>3. Scatter Plot</u></b></h2>
                <p className="mt-4">
                    A scatter plot is a type of graphical representation used in statistics and data analysis to display the relationship between two variables. 
                    It is especially useful for visualizing the distribution and patterns of data points in a two-dimensional space.
                </p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
                    <h2>sns.scatterplot(x="tip", y="total_bill", data=tips_df, hue="day", size="size", palette="YlGnBu")</h2>
                </div>
                <p className="mt-4">Let us explore the parameters:
                    <ul className="mt-4">
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'x': Specifies the x axis. In this case, the 'tip' column is chosen.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'y': Specifies the y axis. In this case, the 'total' column is chosen.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'data': Specifies the dataframe which was initialized as 'tips_df'.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'hue': Groups various points into different colours according to 'days' column. </li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'size': Grouping variable that will produce points with different sizes</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'palette': Specifies the theme of the plot, in this case we have gone with Yellow Blue Green.</li>
                    </ul>
                </p>
                <div class="flex justify-center items-center mt-4">
                    <img src="/src/Python_Library_Pages/Seaborn/Assets/fig1.png" alt="Scatter plot of tips vs total tips received"></img>
                </div>
                <h2 className="flex justify-center items-center mb-2"><i>Fig 1. Scatterplot with seaborn</i></h2>
                <p>
                    The executed code should display a plot similar to Fig 1. We can infer how the tips from customers change depending on the total bill. 
                    Additionally, the tips are sorted according to four different colours for each day while the size of the circle indicates the number of people in that customer group.
                </p>
                <h2 className="mt-4"><b><u>4. Histograms</u></b></h2>
                <p className="mt-4">
                    A histogram is a graphical representation of the distribution of a dataset, showing the frequency or count of data points within specific intervals also known as 'bins'.
                </p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
                    <h2>sns.histplot(x="tip", data=tips_df, kde=False, bins=15)</h2>
                </div>
                <p className="mt-4">
                    Let us explore the parameters:
                    <ul className="mt-4">
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'x': Specifies the x axis. In this case, the 'tip' column is chosen.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'data': Specifies the dataframe which was initialized as 'tips_df'.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'kde': KDE stands for Kernel Density Estimate. It is a smoothed, continuous version of a histogram, providing a more detailed representation of the data distribution.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'bins': Specifies the intervals of grouping the tips received which totals upto 15.</li>
                    </ul>             
                </p>
                <div class="flex justify-center items-center mt-4">
                    <img src="/src/Python_Library_Pages/Seaborn/Assets/fig2.png" alt="Histogram displaying the frequency of receiving tips"></img>
                </div>
                <h2 className="flex justify-center items-center mb-2"><i>Fig 2. Histogram with seaborn</i></h2>
                <p>
                    The executed code should display a plot similar to Fig 2. We can infer how the frequenctly a particular amount is received by a waiter. 
                </p>
                <h2 className="mt-4"><b><u>5. Bar Plot</u></b></h2>
                <p className="mt-4">
                A barplot is a way to create a bar chart to visualize the relationship between a categorical variable and a numeric variable. For example, we can use this plot to compare the number of males vs the number of females who give tips. 
                </p>
                <div className="bg-gray-800 w-4/5 text-white p-2 leading-8 mt-4">
                    <h2>sns.barplot(x="sex", y="tip", data=tips_df, palette="OrRd")</h2>
                </div>
                <p className="mt-4">Let us explore the parameters:
                    <ul className="mt-4">
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'x': Specifies the x axis. In this case, the 'sex' column is chosen.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'y': Specifies the y axis. In this case, the 'total' column is chosen.</li>
                        <li><i className="fa fa-solid fa-circle text-xs"></i>&nbsp; 'palette': Specifies the theme of the plot, in this case we have gone with Orange Red.</li>
                    </ul>
                </p>
                <div class="flex justify-center items-center mt-4">
                    <img src="/src/Python_Library_Pages/Seaborn/Assets/fig3.png" alt="Bar plot of tips vs total tips received"></img>
                </div>
                <h2 className="flex justify-center items-center mb-2"><i>Fig 3. Bar plot with seaborn</i></h2>
                <p>
                    The executed code should display a plot similar to Fig 3. According to the graph, male customers give larger tips than their female counterparts.
                    The mean of male customer tips is slightly greater than 3 compared to female customers which is around 2.8.
                </p>
            </div>
        </div>
    )
}

export default Seaborn