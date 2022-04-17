export default function PropsWithFun(data){
    console.log(data);
    return(
    <div style={{backgroundColor:"skyblue",margin:10}}>
        <h2>{data.name}</h2>
        <h2>{data.email}</h2>
        <h2>{data.address.city}-{data.address.pin}</h2>
    </div>
)
}