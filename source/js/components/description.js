const setDescription = () => {
    const URL = 'https://baconipsum.com/api/?type=lucky';
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            document.body.querySelector('.info p:first-of-type').textContent = xhr.response[length];
        } else {
            console.log('Error!');
        }
    });

    xhr.open('GET', URL);
    xhr.send();
}

export {setDescription}
