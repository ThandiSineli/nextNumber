function getNextNumber(arr) {
    let index = 0;

    return function() {
        if (index < arr.length) {
            document.getElementById('output').innerText = arr[index];
            index++;
        } else {
            document.getElementById('output').innerText = "The End!";
        }
    };
}

const myArray = [1, 2, 3, 4, 5];

const getNextElement = getNextNumber(myArray);

document.getElementById('nextButton').addEventListener('click', getNextElement);
