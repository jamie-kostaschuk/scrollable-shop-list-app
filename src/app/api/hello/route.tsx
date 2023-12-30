export async function POST(request:any) {
    const { input } = request.body;
    const data = await request.json();

    console.log("request is: ", request)
    console.log("request body is: ", request.body)
    console.log("data is: ", input)
    console.log("request json is: ", data.input)
  return new Response("success", {
    status: 200,
  });
}