export async function GET() {

    const result = await fetch('https://fakestoreapi.com/products');
    const data = await result.json()
   
    return Response.json({
        status: true,
        date: data
    })
  }