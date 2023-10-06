const receivesAFunction=(fxn)=>
{
    fxn()
}

const returnsANamedFunction=()=>
{
    return greeting
}

const greeting=()=>
{
    return "Hello World!"
}

const returnsAnAnonymousFunction=()=>
{
    return ()=>
    {
        console.log("Hola")
    }
}