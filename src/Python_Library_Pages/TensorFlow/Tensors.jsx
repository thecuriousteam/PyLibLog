import React from 'react'

const Tensors = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-gray-700'>Introduction to Tensors</h1>
            <p>
                In TensorFlow, a tensor is a fundamental data structure that represents multi-dimensional arrays. Tensors are the primary building blocks for constructing and manipulating machine learning models. They can be thought of as generalizations of matrices and can have various dimensions, including scalars, vectors, matrices, and higher-dimensional arrays.
            </p>
            <h2> Here's an overview of tensors in TensorFlow: </h2><br />
            <h3><strong>1. &nbsp;<u> <i>Scalars: </i></u>  </strong></h3><br />
            <p>
                Tensors of rank 0 are scalars. They have no dimensions and represent single values. In TensorFlow, you can create a scalar tensor like this:
            </p><br />
            <div className='bg-gray-800 w-3/6 text-white p-2 leading-8 mt-3'>
                <h2 className='text-white-800'><span className='text-blue-400'> import</span> tensorflow <span className='text-blue-400'> as</span> tf</h2>
                <h2>scalar_tensor = tf.constant(5)</h2>
            </div>
            <br />
            <h3><strong>2. &nbsp;<u> <i>Vector: </i></u>  </strong></h3><br />
            <p>
                Tensors of rank 1 are vectors. They have one dimension and can be considered as an array of values.
            </p><br />
            <div className='bg-gray-800 w-3/6 text-white p-2 leading-8 mt-3'>
                <h2>vector_tensor = tf.constant([1, 2, 3, 4, 5])</h2>
            </div><br />
            <br />
            <h3><strong>3. &nbsp;<u> <i>Matrices:: </i></u>  </strong></h3><br />
            <p>
                Tensors of rank 2 are matrices. They have two dimensions, representing rows and columns. For example:
            </p><br />
            <div className='bg-gray-800 w-3/6 text-white p-2 leading-8 mt-3'>
                <h2>matrix_tensor = tf.constant([[1, 2, 3], [4, 5, 6]])</h2>
            </div>
            <br />
            <h3><strong>4. &nbsp;<u> <i>Higher-Dimensional Tensors: </i></u>  </strong></h3><br />
            <p>
                Tensors can have more than two dimensions. For instance, a rank-3 tensor could represent a cube of values, and a rank-4 tensor could represent a hyperspace.
            </p><br />
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-3'>
                <h2>rank_3_tensor = tf.constant([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])</h2>
                <h2>rank_4_tensor = tf.constant([[[[1, 2], [3, 4]], [[5, 6], [7, 8]]], [[[9, 10], [11, 12]], [[13, 14], [15, 16]]]])</h2>
            </div><br />
            <br />
            <h3><strong>5. &nbsp;<u> <i>Data Types: </i></u>  </strong></h3><br />
            <p>
                Tensors can hold data of different types, such as tf.float32, tf.int32, and more. You can specify the data type when creating a tensor.
            </p><br />
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-3'>
                <h2>float_tensor = tf.constant(3.14, dtype=tf.float32)</h2>
                <h2>int_tensor = tf.constant(42, dtype=tf.int32)</h2>
            </div>
            <br />
            <h3><strong>6. &nbsp;<u> <i>Tensor Operations:  </i></u>  </strong></h3><br />
            <p>
                TensorFlow provides a wide range of operations to manipulate tensors, including element-wise operations, matrix operations, and more complex operations for building and training machine learning models.
            </p><br />
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-3'>
                <h2>tensor_a = tf.constant([1, 2, 3])</h2>
                <h2> tensor_b = tf.constant([4, 5, 6])</h2>
                <h2>result_tensor = tf.add(tensor_a, tensor_b)</h2>
            </div><br />
            <br />
            <h3><strong>7. &nbsp;<u> <i>Shape:   </i></u>  </strong></h3><br />
            <p>
                The shape of a tensor describes its dimensions. You can access the shape of a tensor using the .shape attribute.
            </p><br />
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-3'>
                <h2>shape = tensor_a.shape  <span># Returns the shape of tensor_a </span></h2>
            </div>
            <br />
            <h3><strong>8. &nbsp;<u> <i>Reshaping:    </i></u>  </strong></h3><br />
            <p>
                You can change the shape of a tensor using the tf.reshape function. This is useful when you need to convert a tensor from one shape to another.
            </p><br />
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-3'>
                <h2>reshaped_tensor = tf.reshape(matrix_tensor, [3, 2])   <span># Reshapes a 2x3 matrix to a 3x2 matrix</span></h2>
            </div>
            <br />
            <h3><strong>9. &nbsp;<u> <i>TensorFlow Constants and Variables:    </i></u>  </strong></h3><br />
            <p>
                You can create tensors using tf.constant for constant values, and tf.Variable for mutable tensors that can be updated during training.
            </p><br />
            <div className='bg-gray-800 w-4/5 text-white p-2 leading-8 mt-3'>
                <h2>constant_tensor = tf.constant([1, 2, 3])</h2>
                    <h2> variable_tensor = tf.Variable([4, 5, 6])</h2>
            </div>
        </div>
    )
}

export default Tensors