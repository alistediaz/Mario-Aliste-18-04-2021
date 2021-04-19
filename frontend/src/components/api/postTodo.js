async function PostTodo(todo) {
    const url = 'http://localhost:3001/todo';
    const data = todo;

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    //var raw = JSON.stringify(data);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
    };
console.log(data);
    try {
        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return true;
        } else {
            console.log('Error.');
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}


export default PostTodo;