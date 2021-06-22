answer = document.getElementsByTagName('h1')[0];

function press(input)
{
    // if answer's inner text equal to 0 then innetText set to input
    if (answer.innerText == 0 | answer.innerText == 'Error')
        answer.innerText = input;
    // if answer's innerText not equal to 0 then append innarText
    else
        answer.innerText += input;
}

function equal()
{
    //if answer is invalid then innerText set in to Error
    try{answer.innerText = eval(answer.innerText);}
    catch{answer.innerText = 'Error';}
}

function reset()
{
    answer.innerText = '0';
}

function del()
{
    // if innerText length is greater than 1 then we set the sliced value
    if (answer.innerText.length > 1)
        answer.innerText = answer.innerText.slice(0, answer.innerText.length - 1);
    // else we reset innertext
    else
        reset()
}