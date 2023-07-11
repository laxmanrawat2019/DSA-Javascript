let counter =1;
function demo(number)
{
    if(counter>number)
    {
        return false;
    }
    
    console.log("Hi Laxman Are u looking for job? can i help u? yes learn DSA from technical suneja "+counter);
    counter++;
    demo(number);
}

demo(10);