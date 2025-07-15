async function GetData(){
    const data = await fetch("https://api.github.com/users/aarushi-successiveTech");
    const result = await data.json();
    console.log(result);
    return(
        <>
        <img src={result.avatar_url}/>
        <p>{result.organizations_url}</p>
        </>
    )
}
export default GetData;