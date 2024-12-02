{
    // Type assertation
    const msg : unknown = "Hello from the other side";

    const msglength : number = (msg as string).length;

    console.log(msglength)
}