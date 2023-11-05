import React from "react";

const IntroPytorch = () => {

    return (
        <div className="ml-8 mb-8 mt-8 mr-8">
            
            {/* Introduction */}
            <div>
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Introduction to Pytorch</h1>
                <p className="mt-4">
                    PyTorch stands out among common machine learning frameworks due to its dynamic computation graph, Pythonic syntax, and vibrant community. 
                    Unlike TensorFlow, which initially had a static graph, PyTorch's dynamic nature simplifies model development and debugging. 
                    Its flexibility and ease of use appeal to researchers and developers. Keras, another popular framework, often integrates with TensorFlow and lacks PyTorch's native dynamic graph and imperative programming style. 
                    PyTorch's rich ecosystem, including libraries like torchvision and Transformers, streamlines deep learning tasks. 
                    Its extensive GPU support and seamless integration with popular hardware platforms like CUDA also set it apart.
                </p>
                <h3 className="mt-2 text-gray-4500 font-bold text-xl ">Keypoints of Pytorch</h3>
                <ul className="">
                    <li><i className="fa fa-solid fa-star mt-2"></i> &nbsp; 
                        Dynamic Computation: <br />
                        PyTorch uses dynamic computational graphs, which means that the graph is built on-the-fly as operations are executed. 
                        This dynamic approach offers more flexibility and makes it easier to debug and experiment with models compared to static computation graphs used in some other frameworks like Tensorflow.
                    </li>
                    <li><i className="fa fa-solid fa-star mt-2"></i> &nbsp; 
                        Pythonic Interface: <br />
                        PyTorch is designed with Python in mind, making it intuitive and accessible to developers who are already familiar with Python. 
                        This makes it an attractive choice for researchers and developers who want to quickly prototype and experiment with deep learning models.
                    </li>
                    <li><i className="fa fa-solid fa-star mt-2"></i> &nbsp; 
                        Neural Network Library: <br />
                        PyTorch provides a comprehensive set of tools for building and training neural networks. 
                        It includes a wide range of pre-built layers, optimizers, loss functions, and utility functions to facilitate the construction of complex deep learning models.
                    </li>
                    <li><i className="fa fa-solid fa-star mt-2"></i> &nbsp; 
                        Strong Ecosystem: <br /> 
                        The PyTorch ecosystem has grown significantly since its inception. 
                        It has a rich set of libraries and extensions, including PyTorch Lightning for streamlined training, PyTorch Hub for model sharing, and the PyTorch Geometric library for graph-based deep learning. 
                        These additions make PyTorch a powerful framework for various specialized use cases and foster collaboration among developers and researchers.
                    </li>   
                </ul>
            </div>

            <div>
                <h1 className="text-3xl font-bold mt-4 text-gray-700">Installation of Pytorch</h1>
                    <ol className="list-decimal">
                        <li className="mt-2">
                            Ensure that you have either <b>Python PIP</b> or <b>Conda</b> installed. If you plan on using a GPU, install <b>CUDA</b> beforehand. You can verify your environment using the following commands.           
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
                        </li> 

                        <li className="mt-2">
                            Visit the official Pytorch website for the download command <a href="https://pytorch.org/get-started/locally/" className="underline hover:no-underline text-blue-600">here</a> and select the specifications of libraries installed on your system.   
                            Copy the PIP/Conda command specified at the bottom and run it in command prompt to begin installation.
                        </li>

                        <li className="mt-2">
                            On completion, verify the installation by running the following commands:
                            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                                <h2>python</h2>
                                <h2>&gt;&gt; import torch</h2>
                                <h2>&gt;&gt; print(torch.__version__)</h2>
                            </div>
                            
                        </li>
                    </ol>

                <div>
                    <h1 className="text-3xl font-bold mt-4 text-gray-700">Getting started with Pytorch</h1>

                    <ol className="list-decimal">
                        <li >
                            <p>
                                Import necesssary libraries.
                            </p>
                            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                                <h2><span className="text-blue-400">import</span> torch </h2>
                                <h2><span className="text-blue-400">import</span> numpy <span className="text-blue-400">as</span> np</h2>
                            </div>
                        </li>

                        <li className="mt-4">
                            <p>
                                Let us create some tensors.  
                            </p>
                            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                                <h2>a = torch.tensor([[1,2,3], [4,5,6]], dtype=torch.int32)</h2>
                                <h2>print("a = ", x)</h2>
                            </div>
                            <p>
                                In the above code, we are initializing variable 'a' as a 2D tensor having 32 bit integer values.
                                Using torch.ones(), torch.zeros() and torch.rand(), we can also create tensors with all values being 1, 0 or random numbers respectively.
                            </p>
                            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                                <h2>b = torch.ones(2, 2)</h2>
                                <h2>c = torch.zeros(2, 2)</h2>
                                <h2>d = torch.rand(2, 2)</h2>
                            </div>
                            <p>
                                Variable 'b' is a 2x2 tensor with value of 1 while 'c' is a 2x2 vector with values of 0. 
                                Variable 'd' is a 2x2 vector with randomly initialized values from 0 to 1.
                            </p>
                        </li>   
                            
                        <li className="mt-4">
                            <h2>Basic operations on tensors</h2>
                            <p>
                                There are generally two ways to arithmetic operations on tensor. 
                                One method can be using the appropriate operators while the other method involves using functions.
                            </p>
                            <div className="bg-gray-800 w-4/5 text-white p-2 leading-8">
                                <p>
                                    tensor1 = torch.tensor([1, 2, 3])<br />
                                    tensor2 = torch.tensor([4, 5, 6])<br />
                                    <span className="text-gray-400"># Addition</span><br />
                                    add_result = torch.add(tensor1, tensor2)<br />
                                    <span className="text-gray-400"># or using the operator '+'</span><br />
                                    add_result_operator = tensor1 + tensor2<br />
                                    <span className="text-gray-400"># in-place addition, indicated by trailing underscore</span><br />
                                    tensor1.add_(tensor2)<br />
                                </p> <br />
                                <p>
                                    <span className="text-gray-400"># Subtraction</span><br />
                                    sub_result = torch.sub(tensor1, tensor2)<br />
                                    <span className="text-gray-400"># or using the operator '-'</span><br />
                                    sub_result_operator = tensor1 - tensor2<br />
                                    <span className="text-gray-400"># in-place Subtraction, indicated by trailing underscore</span><br />
                                    tensor1.sub_(tensor2)<br />
                                </p> <br />
                                <p>
                                    <span className="text-gray-400"># Multiplication</span><br />
                                    mul_result = torch.mul(tensor1, tensor2)<br />
                                    <span className="text-gray-400"># or using the operator '*'</span><br />
                                    mul_result_operator = tensor1 * tensor2<br />
                                    <span className="text-gray-400"># in-place Multiplication, indicated by trailing underscore</span><br />
                                    tensor1.mul_(tensor2)<br />
                                </p> <br />
                                <p>
                                    <span className="text-gray-400"># Division</span><br />
                                    div_result = torch.sub(tensor1, tensor2)<br />
                                    <span className="text-gray-400"># or using the operator '/'</span><br />
                                    div_result_operator = tensor1 / tensor2<br />
                                    <span className="text-gray-400"># in-place Division, indicated by trailing underscore</span><br />
                                    tensor1.div_(tensor2)<br />
                                </p> <br />
                            </div>
                            <p className="mt-4">
                                In-place operations eliminates the need for an additional variable to store the result. The output is stored in the intial variable itself.
                            </p>
                        </li>



                    </ol>
                    
                </div>
            </div>
           

            {/* Datasets and Dataloaders */} 



        </div>
    )
}

export default IntroPytorch;