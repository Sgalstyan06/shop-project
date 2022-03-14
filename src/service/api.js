export async function getData() {
 const resposne = await fetch("https://baby-island.herokuapp.com/homeproduct");
 const data = await resposne.json();
 return data;
 
}
