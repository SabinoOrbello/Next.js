export default function ProductDetails({params}: {
    params: {productId:number}
}){
return <h1>Details about product {params.productId}</h1>
}