// function showContent(content) {
//     var contentDiv = document.getElementById('content');

//     // Create a function to load content from an HTML file
//     function loadContentFromFile(filename) {
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 contentDiv.innerHTML = xhr.responseText;
//             }
//         };
//         xhr.open('GET', filename, true);
//         xhr.send();
//     }

//     // Use a switch statement to determine which content to load
//     switch (content) {
//         case 'Django':
//             loadContentFromFile('Django.html');
//             break;
//         case 'Flask':
//             loadContentFromFile('about.html');
//             break;
//         case 'contact':
//             loadContentFromFile('contact.html');
//             break;
//         default:
//             contentDiv.innerText = 'Content not found';
//     }
// }



function showContent(contentFileName) {
    var contentDiv = document.getElementById('content');
    var loader = document.querySelector('.progress'); 

    loader.style.display = 'block';
    contentDiv.style.display = 'none';

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentDiv.innerHTML = xhr.responseText;

            setTimeout(function () {
                loader.style.display = 'none';
                contentDiv.style.display = 'block'; 
            }, 1000); 
        }
    };

    xhr.open('GET', contentFileName, true);
    xhr.send();
}

