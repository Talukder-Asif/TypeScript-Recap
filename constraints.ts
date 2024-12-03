{
    
    // normal function
    function getLength(str : string){
        return str.length;
    }
    
    // with Generic but Without using Constraints
    function getLength1 <T>(str : T){
        return str.length;
    }


    // Without using Constraints, by using type assertions
    function getLength2<T>(str : T){
        return (str as string).length;
    }


    // With using Constraints
    function getLength3 <T extends {length : number}>(str : T){
        return str.length;
    }

    console.log(getLength3("Hello Developer"))
}