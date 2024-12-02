{
    const isAdmin = false;
    const msg: string|number = isAdmin ? "Welcome Admin" : 404;

    console.log(msg);

    const data : {
        name: string,
        age: number,
        email: string
    } = {
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com"
    }

    // console.log(data?.name?.firstName? data?.name?.firstName : data?.name )


}