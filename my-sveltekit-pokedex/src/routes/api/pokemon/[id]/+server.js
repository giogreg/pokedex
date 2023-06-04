export async function GET({ fetch, params }) {
    const id = params.id
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await res.json()

    return new Response(JSON.stringify(pokeman));
}